//罗马数字 ⅠⅡⅢⅣⅤⅥ

//通识课程
const general_course = [
    {
        type: "思政类",
        courses: [
            {
                id: "021E0020",
                name: "中国近现代史纲要",
                credit: "2.5",
                obligatory: true
            },{
                id: "021E0010",
                name: "思想道德修养与法律基础",
                credit: "2.5",
                obligatory: true
            },
            {
                id: "021E0040",
                name: "马克思主义基本原理概论",
                credit: "2.5",
                obligatory: true
            },
            {
                id: "371E0010",
                name: "形势与政策Ⅰ",
                credit: "1.0",
                obligatory: true
            },
            {
                id: "371E0020",
                name: "形势与政策Ⅱ",
                credit: "1.0",
                obligatory: true
            },
            {
                id: "021E0031",
                name: "毛泽东思想和中国特色社会主义理论体系概论",
                credit: "4.0",
                obligatory: true
            },
        ]
    },
{
        type: "军体类",
        courses: [
            {
                id: "03110021",
                name: "军训",
                credit: "2.0",
                obligatory: true
            },
            {
                id: "031E0010",
                name: "军事理论",
                credit: "1.5",
                obligatory: true
            },

            {
                id: "031E0020",
                name: "体育Ⅰ",
                credit: "1.0",
                obligatory: true
            }, {
                id: "031E0030",
                name: "体育Ⅱ",
                credit: "1.0",
                obligatory: true
            }, {
                id: "031E0040",
                name: "体育Ⅲ",
                credit: "1.0",
                obligatory: true
            },
            {
                id: "031E0050",
                name: "体育Ⅳ",
                credit: "1.0",
                obligatory: true
            },
            {
                id: "031E0080",
                name: "体质测试Ⅰ",
                credit: "0.5",
                obligatory: true
            },
            {
                id: "031E0090",
                name: "体质测试Ⅱ",
                credit: "0.5",
                obligatory: true
            },
        ]
    },
 {
        type: "外语类",
        courses: [
            {
                id: "051F0020",
                name: "大学英语Ⅲ",
                credit: "3.0",
                obligatory: true
            },
            {
                id: "051F0030",
                name: "大学英语Ⅳ",
                credit: "3.0",
                obligatory: true
            },
            {
                id: "051F0600",
                name: "英语水平测试",
                credit: "1.0",
                obligatory: true
            },
        ]
    },
{
        type: "计算机类",
        courses: [
            {
                id: "211G0230",
                name: "计算机科学基础",
                credit: "2.0",
                obligatory: false
            },
            {
                id: "211G240",
                name: "科学计算基础",
                credit: "2.0",
                obligatory: false
            },
            {
                id: "211G200",
                name: "Python程序设计",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "211G210",
                name: "C程序设计",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "211G220",
                name: "Java程序设计",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "211G250",
                name: "程序设计基础",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "211G260",
                name: "程序设计专题",
                credit: "2.0",
                obligatory: false
            },
        ]
    },
];

//大类课程
const classified_course = [
{
        type: "必修",
        courses: [
            {
                id: "061B0170",
                name: "微积分Ⅰ",
                credit: "4.5",
                obligatory: true
            },
            {
                id: "061B0180",
                name: "微积分Ⅱ",
                credit: "2.0",
                obligatory: true
            },
            {
                id: "061B0190",
                name: "微积分Ⅲ",
                credit: "1.5",
                obligatory: true
            },
            {
                id: "061B0010",
                name: "常微分方程",
                credit: "1.0",
                obligatory: true
            },
            {
                id: "061B0240",
                name: "大学物理实验",
                credit: "1.5",
                obligatory: true
            },
            {
                id: "061C0251",
                name: "工程训练",
                credit: "1.5",
                obligatory: true
            },
        ]
    },
{
        type: "二选一",
        courses: [
            {
                id: "061B0200",
                name: "线性代数",
                credit: "2.5",
                obligatory: false
            },
            {
                id: "061Z0040",
                name: "线性代数Ⅰ",
                credit: "3.5",
                obligatory: false
            },
            {
                id: "061B0211",
                name: "大学物理（甲）Ⅰ",
                credit: "4.0",
                obligatory: false
            },
            {
                id: "061B0221",
                name: "大学物理（甲）Ⅱ",
                credit: "4.0",
                obligatory: false
            },
            {
                id: "061B0212",
                name: "大学物理（乙）Ⅰ",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "061B0222",
                name: "大学物理（乙）Ⅱ",
                credit: "3.0",
                obligatory: false
            },
            {
                id: "121C0090",
                name: "画法几何",
                credit: "2.5",
                obligatory: false
            },
            {
                id: "081C0130",
                name: "工程图学",
                credit: "2.5",
                obligatory: false
            },
        ]
    }
];

//专业课程
const professional_course = [
  {
        type: "专业前导课程",
        courses: [
            {
                id: "211B0010",
                name: "离散数学及其应用",
                credit: "4.0",
                obligatory: true
            },
            {
                id: "211C0020",
                name: "数据结构基础",
                credit: "2.5",
                obligatory: true
            },
            {
                id: "211C0010",
                name: "面向对象程序设计",
                credit: "2.5",
                obligatory: true
            },
            {
                id: "211C0070",
                name: "面向信息技术的沟通技巧",
                credit: "2.0",
                obligatory: true
            },
        ]
    },
 {
        type: "专业核心课程",
        courses: [
            {
                id: "21121290",
                name: "计算机系统原理",
                credit: "4.0",
                obligatory: true
            },
            {
                id: "21120032",
                name: "软件工程基础",
                credit: "2.5",
                obligatory: true
            },
            {
                id: "21121330",
                name: "操作系统",
                credit: "5.0",
                obligatory: true
            },
            {
                id: "22188050",
                name: "项目实训",
                credit: "3.0",
                obligatory: true
            },
        ]
    },
];


export {
    general_course,
    classified_course,
    professional_course
}