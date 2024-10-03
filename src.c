#include<emscripten.h>

EMSCRIPTEN_KEEPALIVE
float addi(float a , float b){
    return (a + b);
}

EMSCRIPTEN_KEEPALIVE
float subt(float a , float b){
    return (a - b);
}

EMSCRIPTEN_KEEPALIVE
float mult(float a , float b){
    return (a * b);
}

EMSCRIPTEN_KEEPALIVE
float divi(float a , float b){
    return (a / b);
}