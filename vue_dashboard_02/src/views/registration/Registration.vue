<!--
PC : 회원가입
-->
<template>
	<el-main class="EtcVue Registration">
		<div class="mypage_cont input-form">
			<h3 class="title">
				회원가입
				<span class="mypage-info">외국인, 법인,  만 19세 미만 개인은 가입이 불가합니다.</span>
			</h3>
			<el-form ref="form" :model="form" :rules="rule" label-width="0px" class="registration-form">
				<h4 class="subtitle">1. 아이디/비밀번호 입력</h4>
				<el-form-item prop="usermail" size="small" label="아이디 (이메일주소)">
					<el-input type="email" v-model="form.usermail" placeholder="이메일주소" auto-complete="off" maxlength="60"></el-input>
				</el-form-item>
				<el-form-item prop="password" size="small" label="비밀번호">
					<el-input type="password" v-model="form.password" placeholder="영문/숫자/특수문자 조합 8~16자리" auto-complete="new-password" maxlength="16"></el-input>
				</el-form-item>
				<el-form-item prop="password2" size="small" label="비밀번호 확인">
					<el-input type="password" v-model="form.password2" placeholder="영문/숫자/특수문자 조합 8~16자리" auto-complete="new-password" maxlength="16"></el-input>
					<span class="caution">비밀번호는 영문 대소문자를 구분함</span>
				</el-form-item>
				
				<h4 class="subtitle">2. 이용 동의</h4>
				<el-form-item prop="terms" size="mini" class="term-agree">
					<el-checkbox v-model="form.terms">이용약관 동의 <span class="caution">(필수)</span></el-checkbox>
					<el-button size="small" type="info" @click="termVisible = true">보기</el-button>
					<el-dialog title="이용약관" :visible.sync="termVisible" class="terms-pop" width="860px">
						<el-scrollbar wrap-class="scrollbar-wrapper" :native="false">
							<div class="terms-content">
								이용약관 본문이 나옵니다.<br>
								이용약관 본문이 나옵니다.<br>
								이용약관 본문이 나옵니다.<br>
							</div>
						</el-scrollbar>
					</el-dialog>
				</el-form-item>
				<el-form-item class="unregistration-btn">
					<el-button type="primary" @click.native.prevent="registerClicked" :loading="registering">회원가입</el-button>
				</el-form-item>
			</el-form>
		</div>
	</el-main>
</template>

<script>
import {registration} from '@/api/app.js'
export default {
	data () {
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('비밀번호 확인을 입력해주세요.'))
            } else if (value !== this.form.password) {
                callback(new Error('비밀번호가 일치하지 않습니다.'))
            } else {
                callback()
            }
        }
		return {
			termVisible: false,
			privacyVisible: false,
			marketingVisible: false,
			registering: false,
			form: {
				usermail: '',
				password: '',
				password2: '',
				terms: []
			},
            rule: {
                usermail: [
                    { required: true, message: '이메일 주소를 입력하세요.', trigger: 'blur' },
                    { required: true, pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , message: '입력하신 이메일 주소로는 회원가입이 불가합니다.', trigger: 'blur' }
				],
                password: [
                    { required: true, message: '비밀번호를 입력하세요.', trigger: 'blur' },
                    { required: true, pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/ , message: '영문, 숫자, 특수문자 포함 8~16자리로 입력하세요.', trigger: 'blur' },
                    // { validator: validatePass1, trigger: 'blur'}
				],
                password2: [
                    { validator: validatePass2, trigger: ['change', 'blur']}
                ],
                terms: [
					{ type: 'enum', enum: ['true'], required: true, message: '이용약관 동의 후 회원가입이 가능합니다.', transform: value => value.toString(), trigger: 'change' }
				]
            }
		}
	},

	methods : {
		registerClicked() {
			console.log('==== 회원가입 ====');
			this.$refs['form'].validate((valid) => {
				if(valid){
                    console.log('벨류데이션 통과')
                    
                    this.registering = true

                    registration({
                        form: this.form
                    })
                        .then(res => {
                            console.log('==== res ====')
                            console.log(res)
                            console.log('==== res ====')

                            if (res.data.ok) {
                              this.$alert('가입이 완료되었습니다')
                              this.$router.push('/')
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(_ => {
                            this.registering = false
                        })
                        
				}else {
					console.log('벨류데이션 미통과')
				}
			})
		}
	}
}

</script>


<style lang="scss">
  .EtcVue {
        display: flex;
        flex-flow: column;
        justify-content: center;
        width:1200px;
        margin:0 auto;
        margin-top:80px;
        background:#fff;
    }
    .EtcVue .el-form-item__error {
        position:relative;
    }
    .EtcVue.BankAccount .agreement .el-form-item__error {
        padding-top:8px;
    }
    .EtcVue.LoginVue .mypage_cont {
        position:relative;
        width:320px;
        margin:140px auto 137px;
    }
    .EtcVue.Registered .mypage_cont {
        width:420px;
        height:750px;
        text-align:center;
        border:0;
        padding:0;
        padding-top:120px;
        margin:0 auto;
    }

    .EtcVue .input-form {
        min-height:720px;
        padding:60px 60px 80px;
    }
    .EtcVue.LoginVue .el-form {
        margin-top:40px;
    }
    .EtcVue .mypage_cont .title {
        font-size:30px;
        font-weight:400;
        color:#000;
        line-height:1;
    }
    .EtcVue .mypage_cont .mypage-info {
        font-size:14px;
        font-weight:300;
        color:#9e9e9e;
    }
    .EtcVue .mypage_cont .el-form-item + .mypage-info {
        margin-top:10px;
    }
    .EtcVue .mypage_cont .mypage-info .el-button {
        width:120px;
        height:30px;
        font-size:14px;
        color:#212121;
        line-height:30px;
        border:1px #e0e0e0 solid !important;
        background:#fff;
    }
    .EtcVue .mypage_cont .mypage-info .el-button:hover {
        border-color:#9e9e9e !important;
        background:#f5f5f5;
    }
    .EtcVue .mypage_cont .mypage-logo {
        height:40px;
        text-indent:-9999px;
    }
    .EtcVue .mypage_cont .mypage-site {
        position:relative;
        color:#9e9e9e;
        font-weight:300;
        text-align:center;
        margin-top:40px;
    }
    .EtcVue .mypage_cont .mypage-site .site-url {
        position:relative;
        width:210px;
        height:30px;
        color:#616161;
        text-align:center;
        line-height:30px;
        background:#e5fcf6;
        margin:0 auto;
        margin-top:10px;
    }
    .EtcVue .mypage_cont .mypage-site .site-url::before {
        content:'';
        position:relative;
        display:inline-block;
        width:10px;
        height:14px;
        background-size:100%;
        vertical-align:middle;
        margin-right:10px;
    }
    .EtcVue .mypage_cont .login-form input[type=email] {
        padding-left:45px !important;
        background-position:15px center;
    }
    .EtcVue .mypage_cont .login-form input[type=password] {
        padding-left:45px !important;
        background-position:15px center;
    }
    .EtcVue.SecurityIntro .mypage-info {
        display:block;
        color:#616161;
        line-height:20px;
        margin-top:50px;
    }
    .EtcVue.SecurityIntro h5 {
        margin-top:30px !important;
    }
    .EtcVue.SecurityIntro .btns-row {
        display:flex;
        height:120px;
        background:#fafafa;
        border-bottom:1px #c6c6c6 solid;
        justify-content:center;
        align-items:center;
    }
    .EtcVue.SecurityIntro .btns-row .el-button {
        width:140px;
        height:40px;
        font-size:14px;
        font-weight:300;
        line-height:38px;
    }
    .EtcVue.NewGoogleOTP form {
        border-top:2px #444547 solid;
        padding-top:35px;
        margin-top:20px;
    }
    .EtcVue .el-col {
        position:relative;
    }
    .EtcVue .el-col.input {
        width:280px;
        margin-right:20px;
    }
    .EtcVue .el-col.btn {
        width:100px;
    }
    .EtcVue .el-col.btn .el-button {
        width:100px;
        height:30px;
        font-size:14px;
        line-height:28px;
    }
    .EtcVue .el-input .el-input__inner {
        height:40px;
        border:1px #dadada solid;
        padding:0 20px !important;
    }
    .EtcVue.BankAccount .el-input .el-input__inner {
        height:30px;
        padding:0 10px !important;
    }
    .EtcVue.LoginVue .el-form-item,
    .EtcVue .remember,
    .EtcVue .el-row {
        margin:10px 0 0;
    }
    .EtcVue .el-row.otp .el-col {
        width:calc(50% - 10px);
        margin-right:20px;
    }
    .EtcVue .el-row.otp .el-col:last-child {
        margin-right:0;
    }
    .EtcVue .el-checkbox__label {
        font-size:14px !important;
    }
    .EtcVue .bottom-buttons {
        display: flex;
        color:#e0e0e0;
        justify-content: center;
    }
    .EtcVue .bottom-buttons .el-button {
        width:initial;
        height:initial;
        font-size:14px;
        color:#9e9e9e;
        line-height:normal;
        border:0 !important;
        margin:0 20px;
        background:none;
    }
    .MyPage .unregistration-btn .el-button,
    .EtcVue .el-button {
        width:100%;
        height:50px;
        font-size:16px;
        font-weight:300;
        color:#fff;
        line-height:48px;
        padding:0 !important;
        border-radius:4px;
        border:2px transparent solid !important;
        background:#3f51b5;
    }
    .MyPage .unregistration-btn .el-button:hover,
    .EtcVue .el-button:hover {
        font-weight:400;
        border-color:#283593 !important;
    }
    .EtcVue .el-button.el-button--small {
        height:40px;
        font-size:14px;
        font-weight:300;
        line-height:38px;
    }
    .EtcVue .el-button.disabled {
        opacity:0.5;
        font-weight:300 !important;
        border-color:transparent !important;
        cursor:not-allowed;
    }
    .EtcVue.NewGoogleOTP .el-form-item.btns-row {
        text-align:center;
        border-top:1px #c6c6c6 solid;
        padding-top:40px;
        margin-top:40px;
    }
    .EtcVue.NewGoogleOTP .el-form-item.btns-row .el-button {
        width:140px;
    }
    
    .EtcVue .terms {
        background: #f9f9f9;
        padding:15px 20px;
        border-top:1px #dadada solid;
        border-bottom:1px #dadada solid;
    }
    .EtcVue .el-form-item {
        position:relative;
    }
    .EtcVue .subtitle {
        position:relative;
        font-size:20px;
        font-weight:400;
        color:#212121;
        line-height:1;
        margin-top:50px;
        padding-bottom:10px;
        border-bottom:2px #444547 solid;
    }
    .EtcVue .subtitle.top-line {
        padding-top:40px;
    }
    .MyPage h5,
    .EtcVue .input-form h5 {
        position:relative;
        display:block;
        font-size:16px;
        font-weight:400;
        color:#212121;
        border-bottom:2px #444547 solid;
        margin-top:50px;
        padding-bottom:10px;
    }
    .MyPage .el-form .el-form-item,
    .EtcVue .input-form .el-form-item {
        display:flex;
        min-height:40px;
        border-bottom:1px #e3e3e3 solid;
        margin:0;
    }
    .EtcVue .input-form .el-form-item.recaptcha {
        border-bottom:0;
        margin-top:20px;
    }
    .MyPage .el-form .el-form-item__label,
    .EtcVue .input-form .el-form-item__label {
        position:relative;
        display:block;
        width:160px !important;
        min-height:40px;
        text-align:left;
        line-height:normal;
        padding:10px 0 0 20px;
        background:#f9f9f9;
    }
    .MyPage .el-form .el-form-item__label::before,
    .EtcVue .input-form .el-form-item__label::before {
        display:none;
    }
    .MyPage .el-form .el-form-item__content,
    .EtcVue .input-form .el-form-item__content {
        position:relative;
        display:block;
        width:calc(100% - 160px);
        min-height:40px;
        line-height:normal;
        padding:5px 0 5px 10px;
    }
    .EtcVue .input-form .el-form-item.recaptcha .el-form-item__content {
        width:100%;
        padding:0;
    }
    .MyPage .el-form .el-form-item__content .el-input,
    .EtcVue .input-form .el-form-item__content .el-input {
        width:370px;
    }
    .MyPage .el-form .el-form-item__content .el-input__inner,
    .EtcVue .input-form .el-form-item__content .el-input__inner {
        height:30px;
        padding:0 10px !important;
    }
    .MyPage .caution,
    .EtcVue .input-form .caution {
        display:inline-block;
        color:#304fff;
        font-weight:300;
        padding:5px 0;
    }
    .EtcVue .input-form .el-form-item__content .el-input + .caution {
        margin-left:10px;
    }
    .EtcVue .input-form .el-form-item__error {
        top:initial;
        padding:5px 0;
    }
    .EtcVue .el-form-item.recaptcha .el-form-item__content > div > div {
        margin:0 auto;
    }
    .EtcVue .el-form-item.btn-login {
        margin-top:40px;
    }
    .EtcVue .el-form-item.agree {
        margin-top:20px;
        margin-bottom:50px;
        padding-left:20px;
        padding-bottom:25px;
    }
    .EtcVue .el-form-item.agree .el-form-item__content,
    .EtcVue .el-form-item.smsConf .el-form-item__content {
        line-height:1;
    }
    .EtcVue .bottom-line::before {
        content:'';
        position:absolute;
        display:block;
        left:-50px;
        bottom:0;
        width:500px;
        height:1;
        border-top:1px #b1b1b1 dashed;
    }
    .MyPage .el-form-item.unregistration-btn,
    .EtcVue .el-form-item.unregistration-btn {
        text-align:center;
        border-bottom:0;
        margin-top:40px;
    }
    .MyPage .Unregistration .el-form-item.unregistration-btn {
        border-top:1px #c6c6c6 solid;
        padding-top:40px;
    }
    .MyPage .el-form-item.unregistration-btn .el-form-item__content,
    .EtcVue .el-form-item.unregistration-btn .el-form-item__content {
        width:100%;
        padding:0;
    }
    .MyPage .el-form-item.unregistration-btn .el-button,
    .EtcVue .el-form-item.unregistration-btn .el-button {
        width:260px;
    }
    .EtcVue .el-form-item.bankaccount-btn {
        margin-top:0;
        padding-top:60px;
    }
    .EtcVue .el-form-item.smsConf,
    .EtcVue .el-form-item.bankaccount-account {
        margin-top:10px;
    }
    .EtcVue .el-form-item.smsConf .el-row,
    .EtcVue .el-form-item.bankaccount-account .el-row {
        margin-top:0;
    }
    .EtcVue .el-form-item.smsConf .el-button {
        background:#212121;
    }
    .EtcVue .el-form-item.term-agree {
        padding:0 20px;
    }
    .EtcVue .el-form-item.term-agree .el-form-item__content {
        width:100%;
        padding:11px 0;
    }
    .EtcVue .term-even {
        background:#f9f9f9;
    }
    .EtcVue .term-last {
        border-bottom:1px #ddd solid;
    }
    .EtcVue .el-form-item.term-agree .el-button {
        position:absolute;
        top:calc(50% - 15px);
        right:0;
        width:80px;
        height:30px;
        font-size:14px;
        color:#616161;
        line-height:29px;
        background:#fff;
        border:1px #e0e0e0 solid !important;
    }
    .EtcVue .el-form-item.term-agree .el-button:hover {
        font-weight:400;
        color:#212121;
        background:#f5f5f5;
        border-color:#9e9e9e !important;
    }
    .EtcVue .el-form-item.btm-buttons {
        border-bottom:0;
        margin-top:40px;
    }
    .EtcVue .el-form-item.btm-buttons .el-form-item__content {
        width:100%;
        text-align:center;
        padding:0;
    }
    .EtcVue .el-form-item.btm-buttons .el-button {
        width:140px;
    }
    .EtcVue .el-button.conf-btn {
        color:#616161;
        background:#f4f0ed;
    }
    .EtcVue .el-button.cancel-btn {
        color:#616161;
        background:#e0e0e0;
    }
    .EtcVue .el-button.cancel-btn:hover {
        border-color:#bdbdbd !important;
    }
    .EtcVue .el-form-item.term-agree .el-checkbox__label {
        font-weight:300;
    }
    .EtcVue .input-form .reg-verified .el-col {
        position:relative;
        width:530px;
        margin-right:20px;
    }
    .EtcVue .input-form .reg-verified .el-col:last-child {
        margin-right:0;
    }
    .EtcVue .input-form .item-inner {
        display:flex;
        height:120px;
        background:#fafafa;
        border-bottom:1px #c6c6c6 solid;
        justify-content:center;
        align-items:center;
    }
    .EtcVue .input-form .item-inner .el-button {
        width:160px;
    }
    .EtcVue .input-form .reg-verified .item-inner .el-button {
        width:140px;
    }
    .BankAccount .el-form {
        border-top:2px #444547 solid;
        padding-top:40px;
    }
    .BankAccount .el-form .el-form-item {
        border-bottom:0;
    }
    .BankAccount .el-form .el-form-item__content {
        width:100%;
        padding:0;
    }
    .BankAccount .el-form-item__error {
        position:relative;
        top:initial;
        font-size:14px;
    }
    .BankAccount .account-terms {
        padding:20px;
        color:#9e9e9e;
        line-height:24px;
        background: #fafafa;
        margin-top:10px;
    }
    .BankAccount .account-terms li {
        position:relative;
        font-weight:300;
        line-height:25px;
        padding-left:15px;
    }
    .BankAccount .account-terms li::before {
        content:'';
        position:absolute;
        display:block;
        top:10px;
        left:0;
        width:4px;
        height:4px;
        background:#9e9e9e;
    }
    .BankAccount .mypage-info {
        display:block;
        font-weight:400;
        color:#212121;
        margin-top:30px;
    }
    .BankAccount .mypage-info ~ .el-form-item {
        margin-top:10px;
    }
    .BankAccount .el-form .el-form-item__content .el-input {
        width:300px;
    }
    .BankAccount .el-form .el-form-item__content .el-input__inner {
        height:40px;
    }
    .BankAccount .bankaccount-account .input {
        width:300px;
        margin-right:10px;
    }
    .BankAccount .bankaccount-account .btn {
        width:130px;
    }
    .BankAccount .el-button {
        width:130px;
        height:40px;
        color:#fff;
        font-weight:300;
        line-height:38px;
        border:2px transparent solid;
        padding:0;
        background:#3f51b5;
    }
    .BankAccount .el-button:hover {
        font-weight:400;
        border-color:#283593;
    }
    .BankAccount .el-button.disabled {
        opacity:0.4;
        pointer-events:none;
    }
    .BankAccount .bankaccount-btn {
        position:relative;
        text-align:center;
        border-top:1px #c6c6c6 solid;
        padding-top:40px;
        margin-top:40px !important;
    }
    .BankAccount .bankaccount-btn .el-button {
        width:260px;
        height:50px;
        font-size:16px;
        line-height:48px;
    }

    .EtcVue .timer {
        position:absolute;
        display:block;
        top:calc(50% - 10px);
        right:10px;
        height:20px;
        font-size:12px;
        color:#ff1744;
        text-align:right;
        line-height:20px;
    }
    .EtcVue .terms li {
        font-weight:300;
        color:#252525;
        line-height:24px;
        padding-bottom:24px;
    }
    .EtcVue .terms li:last-child {
        padding-bottom:0;
    }

    .EtcVue .agreement {
        border-top:1px #dadada solid;
    }
    .EtcVue .agreement .el-form-item__content label {
        height:50px;
        line-height:50px;
        margin-left:20px;
    }
    .EtcVue .agreement .el-form-item__content label > .el-checkbox__label {
        color:#252525;
    }
    .EtcVue .terms-pop .el-dialog__body {
        padding-bottom:80px !important;
    }
    .EtcVue .terms-pop .el-scrollbar {
        height:440px;
    }
    .EtcVue .terms-pop .terms-content {
        line-height:24px;
        padding:20px;
        background:#fafafa;
    }
    .EtcVue.NewGoogleOTP .el-form-item {
        border:0;
    }
    .EtcVue.NewGoogleOTP .el-form-item__content {
        width:100%;
        padding:0;
    }
    .EtcVue.NewGoogleOTP .el-form-item__content .el-input__inner {
        width:530px;
        height:40px;
    }
    .EtcVue .otp-step {
        font-size:14px;
        color:#212121;
        line-height:24px;
        margin-top:24px;
    }
    .EtcVue .otp-step:first-child {
        margin-top:0;
    }
    .EtcVue .otp-step .small {
        display:inline-block;
        font-size:14px;
        padding-left:15px;
    }
    .EtcVue .otp-step + .el-row {
        margin-top:15px;
    }
    .EtcVue .otp-step + .el-row > .el-col {
        width:530px;
        height:290px;
        background:#fafafa;
        padding-top:40px !important;
    }
    .EtcVue .qr-code {
        text-align:center;
        margin-right:20px;
    }
    .EtcVue .qr-code .code-img {
        width:200px;
        height:200px;
        margin:0 auto;
        margin-top:20px;
    }
    .EtcVue .key {
        text-align:center;
    }
    .EtcVue .qr-code .label,
    .EtcVue .key .label {
        display:inline-block;
        font-size:14px;
        font-weight:300;
        color:#616161;
    }
    .EtcVue .key .el-input__inner {
        width:330px;
        height:40px;
        font-size:16px;
        font-weight:normal;
        color:#212121;
        text-align:center;
        border:0;
        background:#e5fcf6;
        margin-top:80px;
    }
    .EtcVue .key .el-input__inner::placeholder {
        color:#616161;
    }
</style>