﻿// istfix.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include<iostream>
#include<stack>
#include<locale>      //for function isalnum()
using namespace std;

int preced(char ch) {
    if (ch == '+' || ch == '-') {
        return 1;              //Precedence of + or - is 1
    }
    else if (ch == '*' || ch == '/') {
        return 2;            //Precedence of * or / is 2
    }
    else if (ch == '^') {
        return 3;            //Precedence of ^ is 3
    }
    else {
        return 0;
    }
}

string inToPost(string infix) {
    stack<char> stk;
    stk.push('#');               //add some extra character to avoid underflow
    string postfix = "";         //initially the postfix string is empty
    string::iterator it;

    for (it = infix.begin(); it != infix.end(); it++) {
        if (isalnum(char(*it)))
            postfix += *it;      //add to postfix when character is letter or number
        else if (*it == '(')
            stk.push('(');
        else if (*it == '^')
            stk.push('^');
        else if (*it == ')') {
            while (stk.top() != '#' && stk.top() != '(') {
                postfix += stk.top(); //store and pop until ( has found
                stk.pop();
            }
            stk.pop();          //remove the '(' from stack
        }
        else {
            if (preced(*it) > preced(stk.top()))
                stk.push(*it); //push if precedence is high
            else {
                while (stk.top() != '#' && preced(*it) <= preced(stk.top())) {
                    postfix += stk.top();        //store and pop until higher precedence is found
                    stk.pop();
                }
                stk.push(*it);
            }
        }
    }

    while (stk.top() != '#') {
        postfix += stk.top();        //store and pop until stack is not empty.
        stk.pop();
    }

    return postfix;
}

int main() {
    string infix ;
    std::cin >> infix;
    cout << "Postfix Form Is: " << inToPost(infix) << endl;
}

// Запуск программы: CTRL+F5 или меню "Отладка" > "Запуск без отладки"
// Отладка программы: F5 или меню "Отладка" > "Запустить отладку"

// Советы по началу работы 
//   1. В окне обозревателя решений можно добавлять файлы и управлять ими.
//   2. В окне Team Explorer можно подключиться к системе управления версиями.
//   3. В окне "Выходные данные" можно просматривать выходные данные сборки и другие сообщения.
//   4. В окне "Список ошибок" можно просматривать ошибки.
//   5. Последовательно выберите пункты меню "Проект" > "Добавить новый элемент", чтобы создать файлы кода, или "Проект" > "Добавить существующий элемент", чтобы добавить в проект существующие файлы кода.
//   6. Чтобы снова открыть этот проект позже, выберите пункты меню "Файл" > "Открыть" > "Проект" и выберите SLN-файл.
