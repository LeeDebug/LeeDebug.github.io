# echo → fetch最新代码
# git fetch

# echo → 将最新代码pull到本地
# git pull

echo → 暂存选取所有代码
git add .

read -p "→ 请输入您的commit提交信息：" MSG

echo → 提交所有暂存代码
git commit -m "$MSG"

echo → 将代码推送至三端git仓库
git push -u all hexo

# 复制文件内容
# cp -r -f /Users/qducc/Documents/0_blog_posts/ /Users/qducc/Qducc/blog/source/_posts

# 删除 9_blog 文件夹下的所有内容
# rm -rf /Users/qducc/Documents/0_blog_posts/*

echo → Hexo自动构建及部署
npm run clean
npm run build
npm run deploy