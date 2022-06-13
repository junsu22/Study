# # request 를 여러개 만들어 수동으로 request 보내기

# import requests
# from bs4 import BeautifulSoup

# indeed_result =requests.get("https://www.indeed.com/jobs?q=python&limit=50")

# indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

# pagination = indeed_soup.find("div", {"class":"pagination"})
# links = pagination.find_all('a')
# pages =[]

# for link in links[:-1]:
#     pages.append(int(link.string))

# max_page = pages[-1]
# print(range(max_page))
# # 출력
# # range(0, 5) 
# # range 를 사용함으로써 범위가 주어지다.

# for n in range(max_page):
#     print(f"start={n*50}")

#출력
# start=0
# start=50
# start=100
# start=150
# start=200

# 지저분해서 2.5 파일을 indded.py 로 정리.



from indeed import extract_indeed_pages

max_indeed_pages = extract_indeed_pages()

print(max_indeed_pages)