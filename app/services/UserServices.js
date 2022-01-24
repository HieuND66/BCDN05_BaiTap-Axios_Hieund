function UserSevices() {

    this.setLocal = function() {
        return  axios({
            method: 'get',
            url: 'https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND',
        })
        .then(function(result){
            let DSND = result.data;
            let taiKhoanND = DSND.map(function(users){
                return users.taiKhoan;
            })
            localStorage.setItem("DSND",JSON.stringify(taiKhoanND))
        })
    } 

    this.layDS = function() {
        return  axios({
            method: 'get',
            url: 'https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND',
        });
    }

    this.themND = function(user) {
        return  axios({
            method: 'post',
            url: 'https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND',
            data: user,
        });
    }

    this.xoaND = function(id) {
        return  axios({
            method: 'delete',
            url: `https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND/${id}`,
        });
    }

    this.layChiTiet = function(id) {
        return  axios({
            method: 'get',
            url: `https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND/${id}`,
        });
    }

    this.capnhat = function(id, user) {
        return  axios({
            method: 'put',
            url: `https://61d6ec7035f71e0017c2e8de.mockapi.io/QLND/${id}`,
            data: user,
        });
    }
}