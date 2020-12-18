# 复制文件内容
# cp -r -f /Users/qducc/Documents/0_blog_posts/ /Users/qducc/Qducc/blog/source/_posts

# 删除 9_blog 文件夹下的所有内容
# rm -rf /Users/qducc/Documents/0_blog_posts/*

# 自动推送代码
# git add .
# git commit -m '自动化部署的注释'
# git push origin master

# 自动化构建及部署
npm run clean
npm run build
npm run deploy
