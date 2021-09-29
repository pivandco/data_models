'''
Быстродействие в массивах:
    •Большой массив найти в нём N число но находи число которого нету, и вывести время 3мя способами (В тиках или сек):
    1)Линейный поиск - самый медленный
    2)Фиктивный поиск
    3)Бинарный поиск - быстрейший
    •Какой из трёх способов самый быстрый и самиый медленный
'''

#Zadacha №2
#Создание и заполнение массива
Array_Foundation=[]
N_max=20000000
for i in range(N_max):
    tmp_number_for_array=random.randint(0, 10000)
    Array_Foundation.append(tmp_number_for_array)

#Линейный поиск:
def Linear_Finder(Array,X_number):
    linear_finder_var=0
    start_time=time.time()
    while True:
        if Array[linear_finder_var]==X_number:
            print(f"Element{X_number} was found in current array! in positiion")
            break
        elif linear_finder_var>=len(Array)-1:
            print("Array is ended!")
            print(f"Element{X_number} wasn't found in current array")
            break
        linear_finder_var+=1
    print("Linear_Finder was ended with:--- %s seconds ---" % (float(time.time()) - start_time))

#Фиктивный поиск элемента
def Fictive_Element_Finder(Array,X_number):
    fictive_finder_var=0
    start_time=time.time()
    Array.append(X_number)
    while True:
        if Array[fictive_finder_var]==X_number:
            print(f"Element{X_number} was found in current array! in positiion {fictive_finder_var}")
            break
        elif fictive_finder_var == N_max-1:
            print(f"Element{X_number} wasn't found in current array!")
            break
        fictive_finder_var+=1
    print("Fictive Element Finder was ended with:--- %.16f seconds ---" % (float(time.time()) - start_time))

#Бинарный поиск
def Binary_Finder(Array,X_number):
    start_time=time.time()
    binary_finder_var=1
    binary_finder_second_var=len(Array)
    tmp_binary_var=0
    while (Array[tmp_binary_var]==X_number) or (binary_finder_var>binary_finder_second_var):
        tmp_binary_var=(binary_finder_var+binary_finder_second_var)//2
        if binary_finder_var>Array[tmp_binary_var]:
            binary_finder_var=tmp_binary_var+1
        else:
            binary_finder_second_var=tmp_binary_var-1
        print("tact")
    print("Binary Element Finder was ended with:--- %.64f seconds ---" % (float(time.time()) - start_time))

Linear_Finder(Array_Foundation,101010101)
Fictive_Element_Finder(Array_Foundation,1000101)
Binary_Finder(Array_Foundation,10101002101)


