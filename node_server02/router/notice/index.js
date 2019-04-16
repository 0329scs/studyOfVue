const express = require('express');
const router = express.Router();
const connection = require('../config/database.js')
const multer = require('multer') // 파일업로드를 위한 multer 모듈
const path = require('path') // 기본적으로 제공하는 path 모듈
const fs = require('fs') // 파일 읽고 쓰고 지우고 등의 모듈

const upload = multer({
  storage: multer.diskStorage({ 
    destination: function (req, file, cb) { // 저장 파일경로
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {  // 파일이름
      cb(null, new Date().valueOf() + path.extname(file.originalname))  // 날짜 원시값 + 확장자
    },
    fileFilter: function(req, file, cb) { // 파일필터
      if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
          req.validateErr = '"JPG, PNG 이미지만 업로드 가능합니다."'
          return cb(null, false, new Error('JPG, PNG 이미지만 업로드 가능합니다'));
          } else {
              cb(null, true)
          }
          cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 }
  }),
})



router.post('/register', upload.single('image'), (req, res) => {
  console.log('[[[[[ NOTICE REGISTER ]]]]]');

  // console.log(req.body)

  // 이미지 처리
  console.log('req.file', req.file)

  let oriImgName = '',
      phyImgName = ''

  if(req.file) {
    oriImgName = req.file.originalname
    phyImgName = req.file.filename
  }

  console.log('oriImgName = ', oriImgName)
  console.log('phyImgName = ', phyImgName)

  // 글 등록 내용
  console.log('REGISTER REQ', req.body.form); 

  const form = JSON.parse(req.body.form)

  const {subj, dpTp, init, conts} = form


  connection.query(`INSERT INTO TB_NOTICE02
                    (NOTICE_TP
                      ,SUBJ
                      ,INIT
                      ,CONTS 
                      ,ORI_IMG_NAME
                      ,PHY_IMG_NAME
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
                        ,?
                        ,?
                        ,'admin'
                        , now()
                        ,'admin'
                        , now()
                      )`
                    , [dpTp, subj, `${init}`, conts, oriImgName, phyImgName]
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
router.post('/modify', upload.single('image'), (req, res) => {
  console.log('[[[[[ NOTICE MODIFY ]]]]]');

  console.log('REGISTER REQ', req.body.form); 
  console.log('req.file = ', req.file)

  const form = JSON.parse(req.body.form)

  let {subj, dpTp, init, conts, oriImgName, phyImgName} = form

  const no = req.body.no

  const imgPath = `public/images/${phyImgName}`

  // req.file가 있다는 뜻은 change가 되었다.
  //파일을 지우고 추가
  if(req.file) {
    console.log('=== is req.file ===')

    if(phyImgName) {
      fs.unlinkSync(imgPath)
    }
    oriImgName = req.file.originalname
    phyImgName = req.file.filename
  }
  // 올라온 req.file이 없고 oriImgName도 없다는 뜻은 파일 추가 없이 기존 이미지만 지워짐
  if(!oriImgName && !req.file) {
    console.log('=== is not req.file, oriImgName ===')

    fs.unlinkSync(imgPath)
    oriImgName = ''
    phyImgName = ''
  }


  connection.query(`UPDATE TB_NOTICE02 SET
                      NOTICE_TP = ?
                    , SUBJ      = ?
                    , INIT      = ?
                    , CONTS     = ?
                    , ORI_IMG_NAME = ?
                    , PHY_IMG_NAME = ?
                    , URDR      = 'admin'
                    , UPD_DT    = now()
                    WHERE NOTICE_MNG_NO = ?`
                    , [dpTp, subj, `${init}`, conts, oriImgName, phyImgName, no]
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
  
  const oriImgName = req.body.form.oriImgName
  const phyImgName = req.body.form.phyImgName

  const imgPath = `public/images/${phyImgName}`

  if(phyImgName) {
    fs.unlinkSync(imgPath)
  }

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
                  ) // 내용삭제
  connection.query(`UPDATE TB_NOTICE02 SET
                      ORI_IMG_NAME = ''
                    , PHY_IMG_NAME = ''
                  WHERE NOTICE_MNG_NO = ?
                  `
                  , [no]
                  , (err, rows) => {

                    if(err) return res.status(401).end(JSON.stringify({err: '에러발생'}))

                    // console.log('rows = ', rows);

                    if(rows.affectedRows > 0) {

                      const resData = {}

                      resData.insertId = rows.insertId
                      // resData.modifyId = no
                      resData.ok = true

                      res.status(200)
                      res.end(JSON.stringify(resData))
                    }
                  }
                ) // 이미지 삭제
})

router.get('/list', (req, res) => {
  console.log('[[[[[  NOTICE LIST   ]]]]]')

  console.log('req.params = ', req.query)

  const search = req.query.search

  connection.query(`SELECT 
                      NOTICE_MNG_NO
                    , NOTICE_TP
                    , SUBJ
                    , CONTS
                    , DATE_FORMAT(REG_DT, "%Y-%m-%d %H:%i") REG_DT
                    FROM TB_NOTICE02
                    WHERE SUBJ LIKE '%${search}%'
                    ORDER BY NOTICE_MNG_NO DESC`, (err, rows) => {
    
    if (err) return res.status(401).json({err:'에러발생'})
    // if (rows.length) {
      console.log(rows)
      const resData = {}

      resData.ok = true
      resData.body = rows

      res.status(200)
      res.json(resData)

    // }
  })
})

router.get('/detail/:no', (req, res) => {
  console.log('[[[[[  NOTICE DETAIL  ]]]]]')

  console.log('no = ', req.params.no);

  const no = req.params.no
  
  connection.query(`SELECT 
                      NOTICE_MNG_NO
                    , NOTICE_TP
                    , INIT
                    , SUBJ
                    , CONTS
                    , ORI_IMG_NAME
                    , PHY_IMG_NAME
                    , REGR
                    , DATE_FORMAT(REG_DT, "%Y-%m-%d %H:%i") REG_DT
                    , URDR
                    , DATE_FORMAT(UPD_DT, "%Y-%m-%d %H:%i") UPD_DT
                    FROM TB_NOTICE02
                    WHERE NOTICE_MNG_NO = ?
                    `, [no], (err, rows) => {

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