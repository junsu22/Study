import requests
# replit package request install
# replit package.beautifulsoup install

indeed_result = 
 requests.get("https://www.indeed.com/jobs?q=python&limit = 50")

print(indeed_result.text)
#indeed 사이트에서 html 전부를 가져온다.
#  뒤에 .text 를 붙여주면 html 의 전부를 가져온다.

# 출력
#<Response [200]>

# method : object 안에 있는 function

#html을 호출하는 방법




