# Pandora-Vercel
本项目修改了 `Pandora-Cloud` 的代码结构，使其能够在 `vercel` 以及 `Zeabur` 上部署  

## 一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchrysoljq%2Fpandora-vercel&project-name=pandora-vercel&framework=other)
+ 测试网站 [https://pandora-vercel-lovat.vercel.app](https://pandora-vercel-lovat.vercel.app)
+ 本地运行
```bash
npm install -g vercel
vercel dev
```


## **环境变量**
#### `CHATGPT_API_PREFIX`  
对话 api 请求地址，默认为 `https://ai.fakeopen.com`，可以设置为你部署后的域名，如测试网址 `https://pandora-vercel-lovat.vercel.app`

#### `LOGIN_LOCAL`  
是否启用账号密码登录。Pandora 现已支持直接登录，故默认为 `True`或 1。
