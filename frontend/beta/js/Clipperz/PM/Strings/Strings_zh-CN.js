/*

Copyright 2008-2013 Clipperz Srl

This file is part of Clipperz, the online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or 
  (at your option) any later version.

* Clipperz is distributed in the hope that it will be useful, but 
  WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz. If not, see http://www.gnu.org/licenses/.

*/

Clipperz.PM.Strings.Languages['zh-CN'.toLowerCase()] = MochiKit.Base.merge(Clipperz.PM.Strings.Languages['en-us'], {
'clipperzServiceDescription':	"<h2>只有你知道</h2> <ul> <li> <h3>Clipperz 是:</h3> <ul> <li> <p>一个简单而又安全的密码管理员</p> </li> <li> <p>一个有效的单一登录解决方案</p> </li> <li> <p>一个您保密的资料数据库</p> </li> </ul> </li> <li> <h3> 使用 Clipperz 你能:</h3> <ul> <li> <p>储存和管理你的密码和网上证书</p> </li> <li> <p>无需输入密码自动帮助你登录网站服务</p> </li> <li> <p>保护你的敏感数据:通讯录,口令,信用卡号码, ...</p> </li> <li> <p>与家人和伙伴分享秘密(将要上线)</p> </li> </ul> </li> <li> <h3>Clipperz 的特点:</h3> <ul> <li> <p>免费，彻底匿名</p> </li> <li> <p>在任何时间 任何电脑都可以轻松获取你的密码</p> </li> <li> <p>无需下载和安装任何软件</p> </li> <li> <p>再也无需在电脑或者纸上记录密码了</p> </li> </ul> </li> <li> <h3>Clipperz 的安全性:</h3> <ul> <li> <p>密码将在本地浏览器加密，然后上传至 Clipperz</p> </li> <li> <p>加密密钥是一个只有你知道的密码短语</p> </li> <li> <p>Clipperz 服务会加密你的敏感数据，并不会出现数据的原始形式</p> </li> <li> <p>Clipperz 基于加密标准，没有任何的花哨</p> </li> <li> <p>只要你愿意，你随时都可以查看源代码，但是做为一个使用者来说完全没有去必要去了解那些繁琐的加密原理</p> </li> </ul> </li> <li> <a href=\"http://www.clipperz.com\" target=\"_blank\">更多</a> </li> </ul> ",
'loginFormTitle':	"用你的 Clipperz 帐户登录",
'loginFormUsernameLabel':	"用户名",
'loginFormPassphraseLabel':	"密码短语",
'loginFormDontHaveAnAccountLabel':	"还未建立帐户？",
'loginFormCreateOneLabel':	"创建一个新帐户",
'loginFormForgotYourCredentialsLabel':	"忘记你的证书？",
'loginFormAarghThatsBadLabel':	"呃？这下糟糕了",
'loginFormAfraidOfMaliciousScriptsLabel':	"害怕有恶意脚本？",
'loginFormVerifyTheCodeLabel':	"验证代码",
'loginFormButtonLabel':	"登录",
'loginFormOneTimePasswordCheckboxLabel':	"使用一次性密码短语",
'loginPanelSwithLanguageDescription':	"<h5>选择你的第一语言</h5> ",
'browserCompatibilityDescription':	"<p>使用 Firefox 将得到更快更安全的 Clipperz 服务。不过 Clipperz 同样可以很好的工作在 Opera 和 微软的 IE 中。</p> ",
'OTPloginMessagePanelInitialTitle':	"用一次性密码短语登录",
'OTPloginMessagePanelInitialText':	"发送 OTP 证书 ...",
'OTPloginMessagePanelLoadingTitle':	"用一次性密码短语登录",
'OTPloginMessagePanelLoadingText':	"从服务器读取加密认证数据 ...",
'OTPloginMessagePanelProcessingTitle':	"用一次性密码短语登录",
'OTPloginMessagePanelProcessingText':	"本地解密认证数据",
'loginMessagePanelInitialTitle':	"登录中...",
'loginMessagePanelInitialButtonLabel':	"取消",
'loginMessagePanelConnectedTitle':	"连接成功",
'loginMessagePanelConnectedText':	"完成",
'loginMessagePanelFailureTitle':	"错误",
'loginMessagePanelFailureText':	"登录失败",
'loginMessagePanelFailureButtonLabel':	"取消",
'connectionLoginSendingCredentialsMessageTitle':	"验证证书",
'connectionLoginSendingCredentialsMessageText':	"传送证书",
'connectionLoginCredentialsVerificationMessageTitle':	"验证证书",
'connectionLoginCredentialsVerificationMessageText':	"进行 SRP 认证",
'connectionLoginDoneMessageTitle':	"验证证书",
'connectionLoginDoneMessageText':	"已连接",
'userLoginPanelUpgradingUserCredentialsMessageTitle':	"验证证书",
'userLoginPanelUpgradingUserCredentialsMessageText':	"升级证书到新的认证模式",
'userLoginPanelConnectedMessageTitle':	"用户识别",
'userLoginPanelConnectedMessageText':	"成功登录",
'userLoginPanelTryingAnOlderConnectionSchemaMessageTitle':	"验证证书",
'userLoginPanelTryingAnOlderConnectionSchemaMessageText':	"旧认证模式失效",
'userLoginPanelLoadingUserDataMessageTitle':	"用户识别",
'userLoginPanelLoadingUserDataMessageText':	"正在从 Clipperz 下载加密卡报头",
'userLoginPanelDecryptingUserDataMessageTitle':	"用户识别",
'userLoginPanelDecryptingUserDataMessageText':	"加密卡报头本地解密",
'userLoginPanelDecryptingUserStatisticsMessageTitle':	"用户识别",
'userLoginPanelDecryptingUserStatisticsMessageText':	"本地解密使用统计",
'splashAlertTitle':	"Clipperz 欢迎您",
'splashAlertText':	"<p>安全忠告</p> <ul> <li> <p>在 Clipperz ，用你选择的密码短语保存数据是安全的。没有人能够得到这些数据，除非他们有你的密码。</p> </li> <li> <p> 如果你决定使用 Clipperz 保护敏感数据和关键资料，请务必选用一个复杂的密码短语。越长越好</p> </li> <li> <p>注意:Clipperz将无法找回忘记的密码码短语!</p> </li> </ul> <p>获得更多的说明，请前往 <a href=\"http://www.clipperz.com\" target=\"_blank\">Clipperz</a> 网站.</p> ",
'splashAlertCloseButtonLabel':	"确定",
'registrationFormTitle':	"创建你的帐户",
'registrationFormUsernameLabel':	"用户名",
'registrationFormPassphraseLabel':	"密码短语",
'registrationFormRetypePassphraseLabel':	"确认密码短语",
'registrationFormSafetyCheckLabel':	"我明白 Clipperz 无法找回忘记的密码短语.",
'registrationFormTermsOfServiceCheckLabel':	"我同意接受 <a href='https://www.clipperz.com/terms_service' target='_blank'>服务条款</a> 款.",
'registrationFormDoYouAlreadyHaveAnAccountLabel':	"如果已有一个 Clipperz 帐户",
'registrationFormSimplyLoginLabel':	"在此登录",
'registrationFormButtonLabel':	"注册",
'registrationFormWarningMessageNotMatchingPassphrases':	"两次密码短语不同，请重新输入",
'registrationFormWarningMessageSafetyCheckNotSelected':	"请阅读并检查下面的选项框",
'registrationFormWarningMessageTermsOfServiceCheckNotSelected':	"您需要同意服务条款",
'registrationMessagePanelInitialTitle':	"创建账户...",
'registrationMessagePanelInitialButtonLabel':	"取消",
'registrationMessagePanelRegistrationDoneTitle':	"注册",
'registrationMessagePanelRegistrationDoneText':	"完成",
'registrationMessagePanelFailureTitle':	"注册失败",
'registrationMessagePanelFailureButtonLabel':	"关闭",
'connectionRegistrationSendingRequestMessageText':	"验证证书",
'connectionRegistrationSendingCredentialsMessageText':	"传送证书",
'registrationSplashPanelTitle':	"安全忠告",
'registrationSplashPanelDescription':	"<p>这是你的 Clipperz 证书，请保存好。Clipperz 永远不会第二次显示你的用户名和密码短语</p> ",
'registrationSplashPanelUsernameLabel':	"用户名",
'registrationSplashPanelPassphraseLabel':	"密码短语",
'registrationSplashPanelShowPassphraseButtonLabel':	"显示密码短语",
'donateHeaderLinkLabel':	"捐赠",
'creditsHeaderLinkLabel':	"致谢",
'feedbackHeaderLinkLabel':	"反馈",
'helpHeaderLinkLabel':	"帮助",
'forumHeaderLinkLabel':	"论坛",
'recordMenuLabel':	"密码卡片",
'accountMenuLabel':	"账户",
'dataMenuLabel':	"资料",
'contactsMenuLabel':	"联系",
'toolsMenuLabel':	"工具",
'logoutMenuLabel':	"暂时离开",
'lockMenuLabel':	"安全锁",
'lockTitle':	"账户被锁定",
'lockDescription':	"<p>请输入你的密码短语解开账户</p> ",
'unlockButtonLabel':	"解锁",
'changePasswordTabLabel':	"修改密码短语",
'changePasswordTabTitle':	"修改密码短语",
'changePasswordFormUsernameLabel':	"用户名",
'changePasswordFormOldPassphraseLabel':	"旧密码短语",
'changePasswordFormNewPassphraseLabel':	"新密码短语",
'changePasswordFormRetypePassphraseLabel':	"确认密码短语",
'changePasswordFormSafetyCheckboxLabel':	"我知道 Clipperz 不能找回丢失的密码短语",
'changePasswordFormSubmitLabel':	"修改密码短语",
'changePasswordFormWrongUsernameWarning':	"用户名错误",
'changePasswordFormWrongPassphraseWarning':	"旧密码短语错误",
'changePasswordFormWrongRetypePassphraseWarning':	"两次密码短语不同，请重新输入",
'changePasswordFormSafetyCheckWarning':	"请阅读并检查下面的选项框",
'changePasswordFormProgressDialogTitle':	"正在修改密码短语",
'changePasswordFormProgressDialogConnectedMessageTitle':	"连接",
'changePasswordFormProgressDialogConnectedMessageText':	"完成",
'changePasswordFormProgressDialogErrorMessageTitle':	"错误",
'changePasswordFormProgressDialogErrorMessageText':	"证书修改失败",
'changeCredentialsPanelEncryptingDataMessageTitle':	"正在修改你的密码短语",
'changeCredentialsPanelEncryptingDataMessageText':	"加密卡报头本地解密",
'changeCredentialsPanelCreatingNewCredentialsMessageTitle':	"正在修改你的密码短语",
'changeCredentialsPanelCreatingNewCredentialsMessageText':	"更新你的证书",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageTitle':	"正在修改你的密码短语",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageText':	"正在上传本地证书到 Clipperz",
'changeCredentialsPanelDoneMessageTitle':	"正在修改你的密码短语",
'changeCredentialsPanelDoneMessageText':	"完成",
'manageOTPTabLabel':	"管理你的一次性密码短语",
'manageOTPTabTitle':	"管理你的一次性密码短语",
'manageOTPTabDescription':	"<p>一次性密码短语工作起来和一般的密码短语一样，但是只可以使用一次</p> <p>如果同样的密码短语在一段时间以内再次登录，会被拒绝。登录进程将会失败。</p> <p>为了防止任何欺诈登录，在成功登陆之后，你的一次性密码将会立即被删除，</p> <p>如果一次性密码被键盘记录程序或者间谍软件得到，可能会从被感染的机器上收集数据，这样的话，一次性密码绝对是个很好的选择。</p> <p> <b>强烈建议在公共场合登录 Clipperz 时，使用一次性密码。比如公关计算机，网吧，图书馆等</b> </p> ",
'oneTimePasswordReadOnlyMessage':	"<h6>对不起！</h6> <p>你不能从离线版本管理你的一次性密码短语</p> ",
'oneTimePasswordLoadingMessage':	"<h6>加载数据</h6> <p>请等待 ...</p> ",
'oneTimePasswordNoPasswordAvailable':	"<h6>一次性密码短语没有激活</h6> <p>点击“新建”按钮添加一次性密码短语到你的帐户</p> ",
'createNewOTPButtonLabel':	"新建",
'deleteOTPButtonLabel':	"删除",
'printOTPButtonLabel':	"打印",
'disabledOneTimePassword_warning':	"禁用",
'oneTimePasswordSelectionLink_selectLabel':	"选择:",
'oneTimePasswordSelectionLink_all':	"所有",
'oneTimePasswordSelectionLink_none':	"没有",
'oneTimePasswordSelectionLink_used':	"被使用",
'oneTimePasswordSelectionLink_unused':	"未使用",
'saveOTP_encryptUserDataTitle':	"保存一次性密码短语",
'saveOTP_encryptUserDataText':	"处理新的 OTP 证书 ...",
'saveOTP_encryptOTPDataTitle':	"保存一次性密码短语",
'saveOTP_encryptOTPDataText':	"本地解密认证数据 ...",
'saveOTP_sendingDataTitle':	"保存一次性密码短语",
'saveOTP_sendingDataText':	"发送信任数据到服务器 ...",
'saveOTP_updatingInterfaceTitle':	"保存一次性密码短语",
'saveOTP_updatingInterfaceText':	"更新界面...",
'accountPreferencesLabel':	"使用偏好",
'accountPreferencesTabTitle':	"使用偏好",
'accountPreferencesLanguageTitle':	"界面语言选择",
'accountPreferencesLanguageDescription':	"<p>在下拉菜单中选择你的首选语言</p> ",
'showDonationReminderPanelTitle':	"捐赠提示",
'showDonationReminderPanelDescription':	"<p>显示捐赠提示</p> ",
'saveUserPreferencesFormSubmitLabel':	"保存",
'cancelUserPreferencesFormSubmitLabel':	"取消",
'accountPreferencesSavingPanelTitle_Step1':	"保存使用偏好",
'accountPreferencesSavingPanelText_Step1':	"本地加密你的使用偏好",
'accountPreferencesSavingPanelTitle_Step2':	"保存使用偏好",
'accountPreferencesSavingPanelText_Step2':	"正在向 Clipperz 传送加密后的使用偏好",
'accountLoginHistoryLabel':	"登录历史",
'loginHistoryTabTitle':	"登录历史",
'loginHistoryReadOnlyMessage':	"<h6>对不起！</h6> <p>当你使用离线版本时登录历史是无法显示的</p> ",
'loginHistoryLoadingMessage':	"<h6>加载数据</h6> <p>请等待 ...</p> ",
'loginHistoryLoadedMessage':	"<h6>您的最近 10 次登陆</h6> <p> </p> ",
'loginHistoryIPLabel':	"IP",
'loginHistoryTimeLabel':	"时间",
'loginHistoryCurrentSessionText':	"当前登录信息",
'loginHistoryReloadButtonLabel':	"刷新登录历史",
'deleteAccountTabLabel':	"删除你的账户",
'deleteAccountTabTitle':	"删除你的账户",
'deleteAccountFormUsernameLabel':	"用户名",
'deleteAccountFormPassphraseLabel':	"密码短语",
'deleteAccountFormSafetyCheckboxLabel':	"我知道我的所有数据将被删除,并且是不可回复的.",
'deleteAccountFormSubmitLabel':	"删除我的账户",
'deleteAccountFormWrongUsernameWarning':	"用户名错误",
'deleteAccountFormWrongPassphraseWarning':	"密码短语错误",
'deleteAccountFormSafetyCheckWarning':	"请阅读并检查下面的选项框",
'accountPanelDeletingAccountPanelConfirmationTitle':	"注意",
'accountPanelDeleteAccountPanelConfirmationText':	"你确认要删除你的帐户",
'accountPanelDeleteAccountPanelConfirmButtonLabel':	"是",
'accountPanelDeleteAccountPanelDenyButtonLabel':	"否",
'offlineCopyTabLabel':	"离线拷贝",
'offlineCopyTabTitle':	"离线拷贝",
'offlineCopyTabDescription':	"<p>只需点击一次就可以从 Clipperz 服务器下载所有加密数据到你的硬盘，让你在不能连接互联网的时候使用离线只读版本的 Clipperz。</p> <p>你下载的离线数据和登陆我们网站在线使用是一样安全的，它们使用了同样的密码和安全体系，都不会有暴露数据的风险。</p> <ol> <li> <p>点击链接后开始下载。</p> </li> <li> <p>浏览器会问你如何处理 “Clipperz_YYYYMMDD.html” 文件。保存这个文件到你的硬盘。</p> </li> <li> <p>双击下载的文件在浏览器运行离线版本。</p> </li> <li> <p>输入你的用户名和密码短语。</p> </li> </ol> ",
'offlineCopyDownloadLinkLabel':	"下载",
'offlineCopyDownloadWarning':	"<h4> <a href=\"#\" id=\"offlineCopyDownloadWarningLink\">更新你的“离线版本”!</a> </h4> <p>你最近创建或修改了卡片，需要下载新的“离线版本”</p> ",
'sharingTabLabel':	"共享",
'sharingTabTitle':	"共享",
'sharingTabDescription':	"<p>往往一个机密的资料需要另外一个人或者多人共同使用</p> <p>你可以在这里设置一个简单的授权码,以便在离开办公室的时候你的同事可以访问你的邮箱，或者设置一个复杂的，当你去世后子孙可以在这里找到取得银行保险箱的方法。</p> <p>Clipperz 可以安全并且简单的分享你的密码</p> <p> </p> <p> <b>即将发布...</b> </p> ",
'importTabLabel':	"导入",
'importTabTitle':	"导入",
'importTabDescription':	"<p> <b>即将发布 ...</b> </p> ",
'printingTabLabel':	"导出",
'printingTabTitle':	"导出",
'printingTabDescription':	"<p> <b>打印你的数据</b> </p> <p>点击下面的链接，将会打开一个新窗口，以打印格式显示你的密码卡片</p> <p>如果你打印下来是为了备份，请考虑使用我们提供的\"离线版本\"，这比打印更安全。</p> ",
'printingLinkLabel':	"打印版本",
'contactsTabLabel':	"联系",
'contactsTabTitle':	"联系",
'passwordGeneratorTabLabel':	"随机密码生成器",
'passwordGeneratorTabTitle':	"随机密码生成器",
'passwordGeneratorTabButtonLabel':	"生成随机密码",
'bookmarkletTabLabel':	"书签按钮",
'bookmarkletTabTitle':	"书签按钮",
'bookmarkletTabDescription':	"<p>这个书签按钮是一个简单的非常有用的“一键”工具，它能像一般网站一样储存并且使用</p> <p>Clipperz 按钮书签可以帮助你快速建立密码卡片并且用存在的密码卡片直接登录</p> <p> <b>请注意，这个书签按钮不包含你账户中的任何信息（例如你的用户名和密码），对所有的 Clipperz 使用者，这个书签按钮是大家的工具，代码都是相同的。</b> </p> <h3>怎样安装书签按钮</h3> <h5>Firefox, Camino, Opera, Safari</h5> <ol> <li> <p>选择 “查看 > 工具栏 > 书签工具栏” 确认 “书签工具栏” 显示在浏览器菜单上。</p> </li> <li> <p>拖动 “添加到 Clipperz” 链接到书签工具栏。</p> </li> </ol> <h5>Internet Explorer</h5> <ol> <li> <p>选择 “查看 > 工具栏 > 链接” 确认 “链接” 显示在浏览器菜单上。</p> </li> <li> <p>右键 “添加到 Clipperz”</p> </li> <li> <p>选择 “添加到收藏夹”</p> </li> <li> <p>如果弹出安全提示选择 “是”</p> </li> <li> <p>打开 “链接” 文件夹后单击 “添加”</p> </li> </ol> ",
'bookmarkletTabBookmarkletTitle':	"添加到 Clipperz",
'bookmarkletTabInstructions':	"<h3>如何在一个在线服务中创建可以直接登录的新的密码卡片</h3> <ol> <li> <p>打开你要登录的页面（这个页面通常就是你输入登录信息的页面）</p> </li> <li> <p>点击书签按钮，会出现一个新的弹出窗口</p> </li> <li> <p>复制弹出窗口中的所有文本到剪贴板（ctrl+c）</p> </li> <li> <p>登录你的 Clipperz 账户，然后点击 <b>新建密码卡片</b> 按钮</p> </li> <li> <p>选择“直接登录”模板，之后粘贴剪贴板中的内容到大文本框（ctrl+v）</p> </li> <li> <p>按下 <b>创建</b> 按钮，检查细节并且点击 <b>保存</b>.</p> </li> </ol> <h3>对于已经存在的密码卡片如何添加直接登陆</h3> <ol> <li> <p>与上面的步骤相同</p> </li> <li> <p>与上面的步骤相同</p> </li> <li> <p>与上面的步骤相同</p> </li> <li> <p>输入你的 Clipperz 帐号，选择你刚刚访问的网络服务的密码卡片然后点击 <b>编辑</b> 按钮.</p> </li> <li> <p>将剪贴板中的内容粘贴到“直接登录”区域的大文本框中 (ctrl-V)</p> </li> <li> <p>点击添加 <b>自动登录</b> 按钮，检查细节并且点击k <b>保存</b>.</p> </li> </ol> <p> </p> <p>如果需要关于书签按钮的进一步资料可以在 <a href=\"http://www.clipperz.com/support/user_guide/bookmarklet\" target=\"_blank\">这里获得</a>.</p> ",
'mainPanelDirectLoginBlockLabel':	"直接登录",
'directLinkReferenceShowButtonLabel':	"显示",
'mainPanelDirectLoginBlockDescription':	"<p>添加 “直接登录” 可以让你不用输入用户名和密码即可登录网络账户</p> <p>“直接登录” 可以大大提高你的密码安全性，因为你可以：</p> <ul> <li> <p>方便选择和输入复杂的密码</p> </li> <li> <p>永远不再使用相同的，容易猜测的密码</p> </li> </ul> <p>用 Clipperz 书签按钮简单快速的配置</p> <a href=\"http://www.clipperz.com/support/user_guide/direct_logins\" target=\"_blank\">关于 “直接登录” 的更多信息</a> ",
'mainPanelRecordsBlockLabel':	"密码卡片",
'mainPanelAddRecordButtonLabel':	"添加新密码卡片",
'mainPanelRemoveRecordButtonLabel':	"删除密码卡片",
'mainPanelRecordFilterBlockAllLabel':	"所有",
'mainPanelRecordFilterBlockTagsLabel':	"标签",
'mainPanelRecordFilterBlockSearchLabel':	"搜索",
'recordDetailNoRecordAtAllTitle':	"欢迎来到 Clipperz!",
'recordDetailNoRecordAtAllDescription':	"<h5>从你的账户添加密码卡片开始</h5> <p>密码卡片是简单灵活的方式，在这里你可以保存你的密码和其他机密资料.</p> <p>密码卡片含有一个全权访问网站的证书,你的通讯录，你的信用卡信息,……</p> <h5>不要忘记书签按钮</h5> <p>在你开始前，安装 “添加到 Clipperz” 书签按钮：它将使创建密码卡片变得简单并且有趣</p> <p>去书签按钮标签了解如何安装并使用它</p> <p> </p> <p>然后只需单击 “添加密码卡片” 按钮，即可尽情享受 Clipperz 帐户.</p> <p> <a href=\"http://www.clipperz.com/support/user_guide/managing_cards\" target=\"_blank\">关于创建和管理密码卡片的更多信息</a> </p> ",
'newRecordWizardTitleBox':	"<h5>请选择一个模板</h5> <p>密码卡片是简单灵活的方式，在这里你可以保存你的密码和其他机密资料.</p> <p>首先选择下面的一个模板。在添加或者删除以后,可以随时定制你的密码卡片.</p> ",
'newRecordWizardBookmarkletConfigurationTitle':	"直接登陆",
'newRecordWizardBookmarkletConfigurationDescription':	"<p>将从 Clipperz 书签按钮得到的代码粘贴到下面的文本框中</p> <p>一个直接登陆你的网络账户的新密码卡片将要被创建完成</p> ",
'newRecordWizardCreateButtonLabel':	"创建",
'newRecordWizardCancelButtonLabel':	"取消",
'donateSplashPanelTitle':	"今天就捐赠支持 Clipperz!",
'donateSplashPanelDescription':	"<p>捐赠我们的原因:</p> <ul> <li> <p>支持新特性的开发</p> </li> <li> <p>保持 Clipperz 的免费</p> </li> <li> <p>对我们的辛勤工作表示感谢</p> </li> </ul> <p> <a href=\"http://www.clipperz.com/donations\" target=\"_blank\">进一步资料，请浏览我们的捐款页</a>.</p> <p> <b>愿意捐款？</b> </p> ",
'donateCloseButtonLabel':	"不必了",
'donateDonateButtonLabel':	"是",
'recordTemplates':	{
	'WebAccount':	{
		'title':	"网站密码",
		'description':	"<p>为您的网上服务提供简单的密码储存，自动登录服务.</p> ",
		'fields':	{
			'URL':	"网址",
			'TXT':	"用户名或者电子邮件地址",
			'PWD':	"密码"
		}
	},
	'BankAccount':	{
		'title':	"银行帐户",
		'description':	"<p>安全储存你的银行账号和网上银行证书.</p> ",
		'fields':	{
			'TXT':	"银行",
			'TXT':	"帐号",
			'URL':	"银行网站",
			'TXT':	"在线银行 ID",
			'PWD':	"在线银行密码"
		}
	},
	'CreditCard':	{
		'title':	"信用卡",
		'description':	"<p>信用卡号码，有效日期，CVV2和PIN 都由 Clipperz 管理</p> ",
		'fields':	{
			'TXT':	"类型(VISA, AmEx, ...)",
			'TXT':	"号码",
			'TXT':	"持卡人姓名",
			'TXT':	"有效日期",
			'TXT':	"CVV2",
			'PWD':	"PIN",
			'URL':	"信用卡网站",
			'TXT':	"用户名",
			'PWD':	"密码"
		}
	},
	'AddressBookEntry':	{
		'title':	"通讯录条目",
		'description':	"<p>Clipperz 同样可以为你的私人通讯录服务. 使用这个模板，轻易添加新的条目.</p> ",
		'fields':	{
			'TXT':	"姓名",
			'TXT':	"电子邮件",
			'TXT':	"电话",
			'TXT':	"手机",
			'ADDR':	"地址"
		}
	},
	'Custom':	{
		'title':	"定制密码卡片",
		'description':	"<p>无论你需要保护哪种类型的机密数据，创建定制密码卡片便可满足你的需求</p> ",
		'fields':	{
			'TXT':	"标签 1",
			'TXT':	"标签 2",
			'TXT':	"标签 3"
		}
	}
},
'recordFieldTypologies':	{
	'TXT':	{
		'description':	"simple text field",
		'shortDescription':	"文字"
	},
	'PWD':	{
		'description':	"simple text field, with default status set to hidden",
		'shortDescription':	"密码"
	},
	'URL':	{
		'description':	"simple text field in edit mode, that became an active url in view mode",
		'shortDescription':	"网址"
	},
	'DATE':	{
		'description':	"a value set with a calendar helper",
		'shortDescription':	"数据"
	},
	'ADDR':	{
		'description':	"just like the URL, but the active link points to Google Maps (or similar service) passing the address value as argument",
		'shortDescription':	"地址"
	},
	'CHECK':	{
		'description':	"check description",
		'shortDescription':	"check"
	},
	'RADIO':	{
		'description':	"radio description",
		'shortDescription':	"radio"
	},
	'SELECT':	{
		'description':	"select description",
		'shortDescription':	"select"
	}
},
'newRecordPanelGeneralExceptionTitle':	"错误",
'newRecordPanelGeneralExceptionMessage':	"配置文本不正确，请从书签中确认你的文本并且再试一次",
'newRecordPanelWrongBookmarkletVersionExceptionTitle':	"错误",
'newRecordPanelWrongBookmarkletVersionExceptionMessage':	"配置文本已经产生了一个旧版本书签，请更新你的书签然后再试试。",
'newRecordPanelExceptionPanelCloseButtonLabel':	"取消",
'mainPanelDeletingRecordPanelConfirmationTitle':	"删除所选密码卡片",
'mainPanelDeleteRecordPanelConfirmationText':	"确认要删除选定的密码卡片？",
'mainPanelDeleteRecordPanelConfirmButtonLabel':	"是",
'mainPanelDeleteRecordPanelDenyButtonLabel':	"否",
'mainPanelDeletingRecordPanelInitialTitle':	"删除选定的密码卡片",
'mainPanelDeletingRecordPanelCompletedText':	"完成",
'deleteRecordPanelCollectRecordDataMessageTitle':	"删除密码卡片",
'deleteRecordPanelCollectRecordDataMessageText':	"更新密码卡片列表",
'deleteRecordPanelEncryptUserDataMessageTitle':	"删除密码卡片",
'deleteRecordPanelEncryptUserDataMessageText':	"加密卡报头本地解密",
'deleteRecordPanelSendingDataToTheServerMessageTitle':	"删除密码卡片",
'deleteRecordPanelSendingDataToTheServerMessageText':	"从 Clipperz 更新加密卡报头",
'deleteRecordPanelUpdatingTheInterfaceMessageTitle':	"删除密码卡片",
'deleteRecordPanelUpdatingTheInterfaceMessageText':	"更新界面",
'recordDetailNoRecordSelectedTitle':	"未选择密码卡片",
'recordDetailNoRecordSelectedDescription':	"<p>从左边的列表中选择一个密码卡片</p> ",
'recordDetailLoadingRecordMessage':	"正在从 Clipperz 下载加密卡片",
'recordDetailDecryptingRecordMessage':	"密码卡片数据本地解密",
'recordDetailLoadingRecordVersionMessage':	"下载最新版本的密码卡片",
'recordDetailDecryptingRecordVersionMessage':	"本地解密最新版本密码卡片",
'recordDetailLoadingErrorMessageTitle':	"密码卡片下载错误",
'recordDetailNotesLabel':	"注释",
'recordDetailLabelFieldColumnLabel':	"标签区域",
'recordDetailDataFieldColumnLabel':	"数据区域",
'recordDetailTypeFieldColumnLabel':	"类型",
'recordDetailSavingChangesMessagePanelInitialTitle':	"保存密码卡片",
'recordDetailAddFieldButtonLabel':	"添加新区域",
'recordDetailPasswordFieldHelpLabel':	"点击星星复制密码到剪贴板，然后用 Ctrl+V 使用",
'recordDetailPasswordFieldScrambleLabel':	"隐藏密码",
'recordDetailPasswordFieldUnscrambleLabel':	"显示密码",
'recordDetailDirectLoginBlockTitle':	"直接登录",
'recordDetailNewDirectLoginDescription':	"<p>直接登录配置</p> ",
'recordDetailDirectLoginBlockNoDirectLoginConfiguredDescription':	"<p>这个密码卡片包含在线服务证书吗？</p> <p>仅仅单击就可以从 Clipperz 使用书签配置 “直接登录”</p> ",
'recordDetailAddNewDirectLoginButtonLabel':	"添加新的直接登录",
'recordDetailEditButtonLabel':	"编辑",
'recordDetailSaveButtonLabel':	"保存",
'recordDetailCancelButtonLabel':	"取消",
'newRecordTitleLabel':	"_新密码卡片_",
'recordSaveChangesPanelCollectRecordInfoMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelCollectRecordInfoMessageText':	"更新密码卡片报头",
'recordSaveChangesPanelEncryptUserDataMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelEncryptUserDataMessageText':	"本地加密卡片报头",
'recordSaveChangesPanelEncryptRecordDataMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelEncryptRecordDataMessageText':	"本地加密卡片数据",
'recordSaveChangesPanelEncryptRecordVersionDataMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelEncryptRecordVersionDataMessageText':	"本地加密密码卡片版本数据",
'recordSaveChangesPanelSendingDataToTheServerMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelSendingDataToTheServerMessageText':	"从 Clipperz 更新加密卡报头",
'recordSaveChangesPanelUpdatingTheInterfaceMessageTitle':	"保存密码卡片",
'recordSaveChangesPanelUpdatingTheInterfaceMessageText':	"更新界面",
'passwordGeneratorPanelTitle':	"密码生成器",
'passwordGeneratorPanelOkLabel':	"确认",
'passwordGeneratorPanelCancelLabel':	"取消",
'passwordGeneratorLengthLabel':	"长度:",
//'DWRUtilLoadingMessage':	"加载数据。。。",
'comingSoon':	"即将到来。。。",
'panelCollectingEntryopyMessageText':	"收集平均信息",
'directLoginConfigurationCheckBoxFieldSelectedValue':	"是",
'directLoginConfigurationCheckBoxFieldNotSelectedValue':	"否",
'WELCOME_BACK':	"欢迎回来!",
'currentConnectionText':	"你的连接 IP 地址是&nbsp;__ip__; 来自 __country__, 在 __browser__ 上使用 __operatingSystem__。",
'latestConnectionText':	"你上次的登录 IP 是&nbsp;__ip__ 在 __elapsedTimeDescription__ (__time__); 来自 __country__, 在 __browser__ 上使用 __operatingSystem__。",
'fullLoginHistoryLinkLabel':	"显示所有登录历史",
'elapsedTimeDescriptions':	{
	'MORE_THAN_A_MONTH_AGO':	"一个月之前",
	'MORE_THAN_A_WEEK_AGO':	"一周之前",
	'MORE_THAN_*_WEEKS_AGO':	"__elapsed__ 周以前",
	'YESTERDAY':	"昨天",
	'*_DAYS_AGO':	"__elapsed__ 天之前",
	'ABOUT_AN_HOUR_AGO':	"大约一个小时前",
	'*_HOURS_AGO':	"__elapsed__ 小时前",
	'JUST_A_FEW_MINUTES_AGO':	"仅仅几分钟之前",
	'ABOUT_*_MINUTES_AGO':	"大约 __elapsed__ 几分钟前"
},
'unknown_ip':	"未知",
'calendarStrings':	{
	'months':	{
		'0':	"一月",
		'1':	"二月",
		'2':	"三月",
		'3':	"四月",
		'4':	"五月",
		'5':	"六月",
		'6':	"七月",
		'7':	"八月",
		'8':	"九月",
		'9':	"十月",
		'10':	"十一月",
		'11':	"十二月"
	},
	'shortMonths':	{
		'0':	"一月",
		'1':	"二月",
		'2':	"三月",
		'3':	"四月",
		'4':	"五月",
		'5':	"六月",
		'6':	"七月",
		'7':	"八月",
		'8':	"九月",
		'9':	"十月",
		'10':	"十一月",
		'11':	"十二月"
	},
	'days':	{
		'0':	"星期日",
		'1':	"星期一",
		'2':	"星期二",
		'3':	"星期三",
		'4':	"星期四",
		'5':	"星期五",
		'6':	"星期六"
	},
	'shortDays':	{
		'0':	"日",
		'1':	"一",
		'2':	"二",
		'3':	"三",
		'4':	"四",
		'5':	"五",
		'6':	"六"
	},
	'veryShortDays':	{
		'0':	"日",
		'1':	"一",
		'2':	"二",
		'3':	"三",
		'4':	"四",
		'5':	"五",
		'6':	"六"
	},
	'amDesignation':	"上午",
	'pmDesignation':	"下午"
},

__syntaxFix__: "syntax fix"
});
