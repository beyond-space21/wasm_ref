# web assembly

## install emscripten

**reference:** https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended

    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk

### windows
    .\emsdk.bat install latest
    .\emsdk.bat activate latest
    .\emsdk_env.bat

### linux
    ./emsdk install latest
    ./emsdk activate latest
    source ./emsdk_env.sh




### compile
emcc math_ops.c -o math_ops.js -s EXPORTED_FUNCTIONS="['_add', '_sub', '_mul', '_div']" -s EXTRA_EXPORTED_RUNTIME_METHODS="['cwrap']"