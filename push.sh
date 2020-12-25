echo → 暂存选取所有代码
git add .

read -p "→ 请输入您的commit提交信息：" MSG

echo → 提交所有暂存代码
git commit -m "$MSG"

echo → 将代码推送至三端git仓库
git push -u all hexo
