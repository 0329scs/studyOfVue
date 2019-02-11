const express = require('express');
const router = express.Router();
const connection = require('../config/database.js')

router.post('/register', (req, res) => {
  console.log('[[[[[ NOTICE REGISTER]]]]]');

  console.log('REGISTER REQ', req.body.form); 

  const form = req.body.form

  const {subj, dpTp, init, conts} = form

  connection.connect()

  connection.query(`INSERT INTO TB_NOTICE
                    (NOTICE_TP
                      ,SUBJ
                      ,INIT
                      ,CONTS  
                      )
                      VALUES
                      (
                         ?
                        ,?
                        ,?
                        ,?
                      )`
                    , [dpTp, subj, init, conts]
                    , (err, rows) => {

                        console.log(err);
                        console.log('rows = ', rows);

                        // if(err) return res.status(401).end(JSON.stringify({err: '에러발생'}))

                        // if(rows.affectedRows > 0) {

                        //   const resData = {}

                        //   resData.insertId = rows.insertId
                        //   resData.ok = true

                        //   res.status(200)
                        //   res.end(JSON.stringify(resData))
                        // }
                      }
                    )
})

module.exports = router