foods = ['된장찌개', '피자', '제육볶음']

for x in range(3):
    print(foods[x])

for x in foods:
    print(x)

information = {
    '고향': '서울',
    '취미': '영화 관람',
    '좋아하는 음식': '떡볶이'
}

for x, y in information.items():
    print(x)
    print(y)