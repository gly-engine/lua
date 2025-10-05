/**
 * 
 * @param {string} input 
 * @returns {string} 
 */
const normalize = (input) => input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

const tcc_versions = {
    LINUXAMD64: {
        url: "https://github.com/vlang/tccbin/archive/refs/heads/thirdparty-linux-amd64.tar.gz"
    }
}

const lua_versions = {
    LUA51: {
        url: "https://github.com/lua/lua/archive/refs/tags/v5.1.tar.gz"
    }
}

export function installer() {
    return "ola mundo!"
}
