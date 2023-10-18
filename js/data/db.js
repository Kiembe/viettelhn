// Gói Combo
const proCombo = [
    {
        proV : [
            {
                name: "V90C",
                price: 90,
                syntax: "V90C HN3",
                duration: 30,
                detail: {
                    data: "[30GB (1Gb/ngày)]",
                    freeCall: "[Miễn phí 20 phút đầu tiên/ cuộc nội mạng( Tối đa 1000 phút), 20 phút ngoại mạng]/ 30 Ngày",
                    freeSms: "",
                    freeApp: "",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "V120C",
                price: 120,
                syntax: "V120C HN3",
                duration: 30,
                detail: {
                    data: "[120GB (4Gb/ngày)]",
                    freeCall: "[Miễn phí 20 phút đầu tiên/ cuộc nội mạng( Tối đa 1000 phút), 100 phút ngoại mạng]/ 30 Ngày",
                    freeApp: "Free 25Gb dữ liệu trên LifeBox <br> Free Data xem phim Viettel TV",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                },
            },
            {
                name: "V150C",
                price: 150,
                syntax: "V150C HN3",
                duration: 30,
                detail: {
                    data: "[90GB (3GB/ngày)]",
                    freeCall: "[Miễn phí 20 phút đầu tiên/ cuộc nội mạng( Tối đa 1000 phút), 50 phút gọi ngoại mạng]/30 Ngày",
                    freeApp: "Free 25Gb dữ liệu trên LifeBox <br> Free Data xem phim Viettel TV",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "V90B",
                price: 90,
                syntax: "V90B HN3",
                duration: 30,
                detail: {
                    data: "30Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 1Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời lượng dưới 10 phút <br> Miễn phí 30 phút gọi ngoại mạng Viettel / 30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "V120B",
                price: 120,
                syntax: "V12B HN3",
                duration: 30,
                detail: {
                    data: "45Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 1,5Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời lượng dưới 10 phút <br> Miễn phí 50 phút gọi ngoại mạng Viettel / 30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "V150B",
                price: 150,
                syntax: "V150B HN3",
                duration: 30,
                detail: {
                    data: "60Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 2Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời lượng dưới 10 phút <br> Miễn phí 80 phút gọi ngoại mạng Viettel /30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "V160B",
                price: 160,
                syntax: "V160B HN3",
                duration: 30,
                detail: {
                    data: "120Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 4Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời lượng dưới 10 phút <br> Miễn phí 100 phút gọi ngoại mạng Viettel /30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "V180B",
                price: 180,
                syntax: "V180B HN3",
                duration: 30,
                detail: {
                    data: "180Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 6Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời <br>  Miễn phí 100 phút gọi ngoại mạng Viettel /30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "V200B",
                price: 200,
                syntax: "V200B HN3",
                duration: 30,
                detail: {
                    data: "240Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 8Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel thời lượng dưới 20 phút <br> Miễn phí 100 phút gọi ngoại mạng Viettel /30 ngày",
                    freeApp: "",
                    applyFor: "Thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
        ],
    
        proF : [
            {
                name: "F70",
                price: 70,
                syntax: "F70 HN3",
                duration: 30,
                detail: {
                    data: "3Gb data/ 30 ngày <br> (Hết 3Gb dừng truy cập mạng)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 20 phút gọi ngoại mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "F90",
                price: 90,
                syntax: "F90 HN3",
                duration: 30,
                detail: {
                    data: "5Gb data/ 30 ngày <br> (Hết 5Gb dừng truy cập mạng)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 20 phút gọi ngoại mạng",
                    freeSms: "250SMS nội mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "F120",
                price: 120,
                syntax: "F120 HN3",
                duration: 30,
                detail: {
                    data: "7Gb data/ 30 ngày <br> (Hết 7Gb dừng truy cập mạng)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 40 phút gọi ngoại mạng",
                    freeSms: "250SMS nội mạng",
                    freeApp: "",
                    applyFor: "thuê bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "F140",
                price: 140,
                syntax: "F140 HN3",
                duration: 30,
                detail: {
                    data: "8Gb data/ 30 ngày <br> (Hết 8Gb dừng truy cập mạng)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 60 phút gọi ngoại mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "F190",
                price: 190,
                syntax: "F190 HN3",
                duration: 30,
                detail: {
                    data: "9Gb data/ 30 ngày <br> (Hết 9Gb dừng truy cập mạng)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 100 phút gọi ngoại mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
        ],
    
        proN : [
            {
                name: "7N",
                price: 70,
                syntax: "7N HN3",
                duration: 7,
                detail: {
                    data: "[35Gb data tốc độ cao (5Gb/ngày)]",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 35 phút gọi ngoại mạng (5 phút/ ngày)",
                    freeSms: "Free SMS nội mạng",
                    freeApp: "Miễn phí gói TV360 Basic",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "30N",
                price: 300,
                syntax: "30N HN3",
                duration: 30,
                detail: {
                    data: "[150Gb data tốc độ cao (5Gb/ngày)]",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 150 phút gọi ngoại mạng (5 phút/ ngày)",
                    freeSms: "Free SMS nội mạng",
                    freeApp: "Miễn phí gói TV360 Basic",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "90N",
                price: 900,
                syntax: "90N HN3",
                duration: 90,
                detail: {
                    data: "[450Gb data tốc độ cao (5Gb/ngày)]",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 450 phút gọi ngoại mạng (5 phút/ ngày)",
                    freeSms: "Free SMS nội mạng",
                    freeApp: "Miễn phí gói TV360 Basic",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
        ],
    
        proMXH : [
            {
                name: "MXH120",
                price: 120,
                syntax: "MXH120 HN3",
                duration: 30,
                detail: {
                    data: "30Gb / 30 Ngày ( Mỗi ngày sử dụng 1Gb data hết lưu lượng ngày mai truy cập tiếp )",
                    freeCall: "",
                    freeApp: "Miễn phí lưu lượng data truy cập Tiktok, Youtube, Facebook và <br> Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút. Miễn phí 30 phút gọi ngoại mạng /30 ngày",
                    applyFor: " Cho thuê bao di động Viettel trả trước kích hoạt mới từ 1/1/2023 và thuê bao trong danh sách ưu đãi."
                }
            },
            {
                name: "MXH150",
                price: 150,
                syntax: "MXH150 HN3",
                duration: 30,
                detail: {
                    data: "45 Gb / 30 Ngày ( Mỗi ngày sử dụng 1.5Gb data hết lưu lượng ngày mai truy cập tiếp )",
                    freeCall: "",
                    freeApp: "Miễn phí lưu lượng data truy cập Tiktok, Youtube, Facebook và nhắn tin Mesenger <br> Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút. Miễn phí 50 phút gọi ngoại mạng /30 ngày",
                    applyFor: "Cho thuê bao di động Viettel trả trước kích hoạt mới từ 1/1/2023 và thuê bao trong danh sách ưu đãi."
                }
            },
            {
                name: "3MXH150",
                price: 450,
                syntax: "3MXH150 HN3",
                duration: 90,
                detail: {
                    data: "135 Gb / 90 Ngày ( Mỗi ngày sử dụng 1.5Gb data hết lưu lượng ngày mai truy cập tiếp )",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút <br> 150 phút gọi ngoại mạng",
                    freeApp: "Miễn phí 100% data tốc độ cao không giới hạn truy cập xem Fim trên Tiktok, Youtube, Facebook, Messenger",
                    applyFor: "Cho thuê bao di động Viettel trả trước kích hoạt mới từ 1/1/2023 và thuê bao trong danh sách ưu đãi."
                }
            },
        ],
    
        proVN : [
            {
                name: "V120N",
                price: 120,
                syntax: "V120N HN3",
                duration: 30,
                detail: {
                    data: "120 Gb / 30 Ngày ( Mỗi ngày sử dụng 4Gb data hết lưu lượng ngày mai truy cập tiếp )",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 50 phút gọi ngoại mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
            {
                name: "V150N",
                price: 150,
                syntax: "V150N HN3",
                duration: 30,
                detail: {
                    data: "180 Gb / 30 Ngày ( Mỗi ngày sử dụng 6Gb data hết lưu lượng ngày mai truy cập tiếp )",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 100 phút gọi ngoại mạng",
                    freeApp: "",
                    applyFor: "thuê  bao di động trả trước Viettel trong danh sách khuyến mãi riêng"
                }
            },
        ]
    }
]

// Gói Tháng
const proMonth = [
    {
        proST : [
            {
                name: "ST70K",
                price: 70,
                syntax: "ST70K HN3",
                duration: 30,
                detail: {
                    data: "15Gb / 30 Ngày ( Mỗi ngày sử dụng 500Mb data)",
                    applyFor: "thuê bao di động toàn mạng Viettel"
                }
            },
            {
                name: "ST90K",
                price: 90,
                syntax: "ST90K HN3",
                duration: 30,
                detail: {
                    data: "30Gb / 30 Ngày ( Mỗi ngày sử dụng 1Gb data)",
                    applyFor: "thuê bao di động toàn mạng Viettel"
                }
            },
            {
                name: "ST120K",
                price: 120,
                syntax: "ST120K HN3",
                duration: 30,
                detail: {
                    data: "60Gb data/ 30 ngày ( Mỗi ngày sử dụng 2Gb data)",
                    freeApp: "Miễn phí lưu trữ 25GB dữ liệu trên LifeBox <br> Miễn phí xem phim trên ứng dụng Viettel TV",
                    applyFor: "thuê bao di động toàn mạng Viettel"
                }
            },
            {
                name: "ST150K",
                price: 150,
                syntax: "ST150K HN3",
                duration: 30,
                detail: {
                    data: "90Gb data/ 30 ngày ( Mỗi ngày sử dụng 3Gb data)",
                    freeApp: "Miễn phí lưu trữ 25GB dữ liệu trên LifeBox <br> Miễn phí xem phim trên ứng dụng Viettel TV",
                    applyFor: "thuê bao di động toàn mạng Viettel"
                }
            },
        ],
    
        proSD : [
            {
                name: "SD70",
                price: 70,
                syntax: "SD70 HN3",
                duration: 30,
                detail: {
                    data: "30Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 1Gb/ 1 ngày)",
                    applyFor: "thuê bao di động trả trước kích hoạt mới từ 01/01/2023"
                }
            },
            {
                name: "SD90",
                price: 90,
                syntax: "SD90 HN3",
                duration: 30,
                detail: {
                    data: "45Gb Data tốc độ cao/ 30 ngày",
                    applyFor: "thuê bao di động trả trước toàn mạng Viettel"
                }
            },
            {
                name: "SD120",
                price: 120,
                syntax: "SD120 HN3",
                duration: 30,
                detail: {
                    data: "60Gb Data tốc độ cao/ 30 ngày",
                    applyFor: "thuê bao di động trả trước toàn mạng Viettel"
                }
            },
            {
                name: "SD150",
                price: 150,
                syntax: "SD150 HN3",
                duration: 30,
                detail: {
                    data: "90Gb Data tốc độ cao/ 30 ngày",
                    applyFor: "thuê bao di động trả trước toàn mạng Viettel"
                }
            },
        ],
    
        otherPro : [
            {
                name: "ST60N",
                price: 60,
                syntax: "ST60N HN3",
                duration: 30,
                detail: {
                    data: "60Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 2Gb/ 1 ngày)",
                    applyFor: "thuê bao di động trả trước kích hoạt mới từ 01/06/2022"
                }
            },
            {
                name: "ST90N",
                price: 90,
                syntax: "ST90N HN3",
                duration: 30,
                detail: {
                    data: "12Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 4Gb/ 1 ngày)",
                    applyFor: "thuê bao di động trả trước kích hoạt mới từ 01/06/2022"
                }
            },
            {
                name: "V120N",
                price: 120,
                syntax: "V120N HN3",
                duration: 30,
                detail: {
                    data: "12Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 4Gb/ 1 ngày)",
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 phút <br> 50 phút gọi ngoại mạng",
                    applyFor: "thuê bao di động trả trước kích hoạt mới từ 01/02/2021"
                }
            },
            {
                name: "MXH100",
                price: 100,
                syntax: "MXH100 HN3",
                duration: 30,
                detail: {
                    data: "30Gb Data tốc độ cao/ 30 ngày <br> ( Sử dụng 1Gb/ 1 ngày)",
                    freeApp: "Miễn phí 100% data tốc độ cao không giới hạn truy cập xem Fim trên Tiktok, Youtube, Facebook, tín nhắn trên Messenger.",
                    applyFor: "Thuê bao trong danh sách khuyến mãi riêng"
                }
            },
        ]
    }
]

// Gói Nội Mạng
const proInCall = [

    {
        proMPX : [
            {
                name: "MP30X",
                price: 30,
                syntax: "MP30X HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 Phút ( Tối đa 500 Phút) / 30 Ngày",
                }
            },
            {
                name: "MP50X",
                price: 50,
                syntax: "MP50X HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 Phút ( Tối đa 500 Phút) / 30 Ngày",
                }
            },
            {
                name: "MP70X",
                price: 70,
                syntax: "MP70X HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 1000 Phút) / 30 Ngày",
                }
            },
            {
                name: "MP90X",
                price: 90,
                syntax: "MP90X HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 1000 Phút) / 30 Ngày",
                }
            },
            {
                name: "MP120X",
                price: 120,
                syntax: "MP120X HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 1000 Phút) / 30 Ngày",
                }
            },
        ],
    
        proMP : [
            {
                name: "MP30",
                price: 30,
                syntax: "MP30 HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí 300 phút gọi nội mạng Viettel / 30 Ngày",
                }
            },
            {
                name: "MP50",
                price: 50,
                syntax: "MP50 HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí tất cả các cuộc gọi nội mạng Viettel < 20 Phút /30 ngày",
                }
            },
            {
                name: "MP70",
                price: 70,
                syntax: "MP70 HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí tất cả các cuộc gọi nội mạng Viettel < 20 Phút /30 ngày",
                }
            },
            {
                name: "MP90",
                price: 90,
                syntax: "MP90 HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí tất cả các cuộc gọi nội mạng Viettel < 20 Phút /30 ngày",
                }
            },
            {
                name: "MP120",
                price: 120,
                syntax: "MP120 HN3",
                duration: 30,
                detail: {
                    freeCall: "Miễn phí tất cả các cuộc gọi nội mạng Viettel < 20 Phút /30 ngày",
                }
            },
        ]
    }
]

// Gói Nội Ngoại Mạng   
const proOutCall = [
    {
        name: "MP50S",
        price: 50,
        syntax: "MP50S HN3",
        duration: 30,
        detail: {
            freeInCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 Phút ( Tối đa 400 Phút)",
            freeOutCall: "Miễn phí 20 Phút gọi ngoại mạng / 30 ngày"
        }
    },
    {
        name: "MP70S",
        price: 70,
        syntax: "MP70S HN3",
        duration: 30,
        detail: {
            freeInCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 500 Phút)",
            freeOutCall: "Miễn phí 30 Phút gọi ngoại mạng / 30 ngày"
        }
    },
    {
        name: "MP90S",
        price: 90,
        syntax: "MP90S HN3",
        duration: 30,
        detail: {
            freeInCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 600 Phút)",
            freeOutCall: "Miễn phí 40 Phút gọi ngoại mạng / 30 ngày "
        }
    },
    {
        name: "MP120S",
        price: 120,
        syntax: "MP120S HN3",
        duration: 30,
        detail: {
            freeInCall: "Miễn phí các cuộc gọi nội mạng Viettel dưới 20 Phút ( Tối đa 700 Phút)",
            freeOutCall: "Miễn phí 50 Phút gọi ngoại mạng / 30 ngày"
        }
    },
]

// export combo
export const V = proCombo[0].proV
export const F = proCombo[0].proF
export const N = proCombo[0].proN
export const MXH = proCombo[0].proMXH
export const VN = proCombo[0].proVN


// export month
export const ST = proMonth[0].proST
export const SD = proMonth[0].proSD
export const OT = proMonth[0].otherPro

// export call
export const MP = proInCall[0].proMP
export const MPX = proInCall[0].proMPX
export const OUTC = proOutCall


