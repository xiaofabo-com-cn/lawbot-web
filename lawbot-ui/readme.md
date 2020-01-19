# web 工程

## 目录介绍

```bash
├── lawbot   # 主模块，首页，产品，关于我们
├── lawbot-case-award # ai裁决书模块
├── lawbot-case-contract # ai合同模块
├── lawbot-case-reco  # ai案件分析模块
└── readme.md
```

### 安装
```
# install the dependencies
npm install

# run developer env
npm run dev

# build the production 
npm run build
```

## 部署
```bash
### 分别打开4个模块,此处只介绍一个模块，其他的类似
cd lawbot-ui/lawbot
npm run install # 按照项目
npm run build  # 执行编译
zip -r dist.zip ./dist  # 生成zip

### 客户端上传到服务器
cd lawbot-ui/
scp ./lawbot/*.zip ubuntu@193.112.203.18:/home/ubuntu/lawbot/

### 进入服务器目录，执行解压操作
cd /home/ubuntu/lawbot/
### web目录介绍
#├── lawbot-ui   # 主模块，首页，产品，关于我们
#├── lawbot-case-award-ui # ai裁决书模块
#├── lawbot-case-contract-ui # ai合同模块
#├── lawbot-case-reco-ui  # ai案件分析模块
#└── 
mv lawbot-ui lawbot-ui_bak_2019  # 备份上个版本
unzip dist.zip
mv dist lawbot-ui
rm -rf ./dist.zip

```

## 修改轮播图
ps: 该办法只能用于修改首页轮播图的图片，图片和轮播图下面的图文介绍一一对应，不可调整顺序

```bash
# step 1
cd /home/ubuntu/lawbot/lawbot-ui/assets/images/swiper
# step 2
## 根据需求替换成对应的图片
```