const express = require('express');
const router = express.Router();
const connection = require('../config/database.js')

router.post('/register', (req, res) => {
  console.log('[[[[[ NOTICE REGISTER ]]]]]');

  console.log('REGISTER REQ', req.body.form); 

  const form = req.body.form

  const {subj, dpTp, init, conts} = form


  connection.query(`INSERT INTO TB_NOTICE02
                    (NOTICE_TP
                      ,SUBJ
                      ,INIT
                      ,CONTS 
                      ,REGR
                      ,REG_DT
                      ,URDR
                      ,UPD_DT
                      )
                      VALUES
                      (
                         ?
                        ,?
                        ,?
                        ,?
                        ,'admin'
                        , now()
                        ,'admin'
                        , now()
                      )`
                    , [dpTp, subj, `${init}`, conts]
                    , (err, rows) => {

                        if(err) return res.status(401).end(JSON.stringify({err: '에러발생'}))

                        if(rows.affectedRows > 0) {

                          const resData = {}

                          resData.insertId = rows.insertId
                          resData.ok = true

                          res.status(200)
                          res.end(JSON.stringify(resData))
                        }
                      }
                    )
})
router.post('/modify', (req, res) => {
  console.log('[[[[[ NOTICE MODIFY ]]]]]');

  console.log('REGISTER REQ', req.body.form); 

  const form = req.body.form

  const {subj, dpTp, init, conts} = form

  const no = req.body.no


  connection.query(`UPDATE TB_NOTICE02 SET
                      NOTICE_TP = ?
                    , SUBJ      = ?
                    , INIT      = ?
                    , CONTS     = ?
                    , URDR      = 'admin'
                    , UPD_DT    = now()
                    WHERE NOTICE_MNG_NO = ?`
                    , [dpTp, subj, `${init}`, conts, no]
                    , (err, rows) => {

                        if(err) return res.status(401).end(JSON.stringify({err: '에러발생'}))

                        console.log('rows = ', rows);

                        if(rows.affectedRows > 0) {

                          const resData = {}

                          resData.insertId = rows.insertId
                          // resData.modifyId = no
                          resData.ok = true

                          res.status(200)
                          res.end(JSON.stringify(resData))
                        }
                      }
                    )
})

router.post('/delete', (req, res) => {
  console.log('[[[[[ NOTICE DELETE ]]]]]');

  const no = req.body.no

  connection.query(`DELETE FROM TB_NOTICE02 WHERE NOTICE_MNG_NO = ?`
                    , [no]
                    , (err, rows) => {

                      if(err) return res.status(401).end(JSON.stringify({err: '에러발생'}))

                      console.log('rows = ', rows);

                      if(rows.affectedRows > 0) {

                        const resData = {}

                        resData.insertId = rows.insertId
                        // resData.modifyId = no
                        resData.ok = true

                        res.status(200)
                        res.end(JSON.stringify(resData))
                      }
                    }
                  )
})

router.get('/list', (req, res) => {
  console.log('[[[[[ NOTICE LIST ]]]]]');

  connection.query(`SELECT 
                      NOTICE_MNG_NO
                    , NOTICE_TP
                    , SUBJ
                    , CONTS
                    , DATE_FORMAT(REG_DT, "%Y-%m-%d %H:%i") REG_DT
                    FROM TB_NOTICE02
                    ORDER BY NOTICE_MNG_NO DESC`, (err, rows) => {

    if(err) return res.status(401).json({err: '에러발생'})

    if(rows.length) {
      console.log(rows)

      const resData = {}
      
      resData.ok = true
      resData.body = rows

      res.status(200)
      res.json(resData)
    }

    
  })
})

router.get('/detail/:no', (req, res) => {
  console.log('[[[[[  NOTICE DETAIL  ]]]]]')

  console.log('no = ', req.params.no);

  const no = req.params.no
  
  connection.query(`SELECT * FROM TB_NOTICE02 WHERE NOTICE_MNG_NO = ?`, [no], (err, rows) => {

    if (err) return res.status(401).end(JSON.stringify({err:'에러발생'}))

    console.log(rows[0]);

    const resData = {}

    if (rows[0]) {

      resData.ok = true
      resData.body = rows[0]

      res.status(200)
      res.json(resData)
      
    } else {
      resData.ok = true
      res.status(200)
      res.json(resData)
    }
  })
})

module.exports = router