const allBooks = [];

const mainMenu = () => {
    do {
        const menu = prompt(
            "กรุณาเลือกเมนูเพื่อทำรายการ (กรอกตัวเลข)\n1. เพิ่มรายการหนังสือ\n2. แสดงรายการหนังสือ\n3. แก้ไขรายการหนังสือ\n4. ลบหนังสือ\n0. ออกจากระบบ"
        );
        switch (menu) {
            case "1":
                addBook();
                break;
            case "2":
                showBook();
                break;
            case "3":
                editBook();
                break;
            case "4":
                deleteBook();
                break;
            case "0":
                break;
            default: {
                alert("กรุณาพิมพ์เฉพาะตัวเลขเมนูที่ถูกต้อง");
                mainMenu();
                break;
            }
        }
    } while (menu != "0");
};

const addBook = () => {
    const name = prompt("เพิ่มชื่อหนังสือ");
    const author = prompt("เพิ่มชื่อผู้แต่ง");
    const year = prompt("เพิ่มปีที่พิมพ์");
    const price = prompt("เพิ่มราคา");
    const book = { name, author, year, price };
    allBooks.push(book);
    alert("เพิ่มข้อมูลหนังสือเรียบร้อยแล้ว");

    mainMenu();
};

const showBook = () => {
    if (!allBooks.length) {
        alert("ไม่มีหนังสือในระบบ");
        mainMenu();
    } else {
        let text = "";
        allBooks.forEach((item, index) => {
            text = text.concat(`\nหมายเลข ${index + 1} : ${item.name} ${item.author} ${item.year
                } ${item.price}
       `);
        });
        alert("รายการหนังสือ \n" + text);
        console.log();
        mainMenu();
    }
};

const editBook = () => {
    if (!allBooks.length) {
        alert("ไม่มีหนังสือในระบบ");
        mainMenu();
    } else {
        let text = "";
        allBooks.forEach((item, index) => {
            text = text.concat(`\nหมายเลข ${index + 1} : ${item.name} ${item.author} ${item.year
                } ${item.price}
       `);
        });
        const edit = prompt("เลือกหมายเลขหนังสือที่จะแก้ไข \n" + text);
        if (!allBooks[edit - 1]) {
            alert("กรอกหมายเลขหนังสือผิดกรุณาทำรายการใหม่");
            mainMenu();
        } else {
            allBooks[edit - 1].name = prompt("แก้ไขชื่อหนังสือ");
            allBooks[edit - 1].author = prompt("แก้ไขชื่อผู้แต่ง");
            allBooks[edit - 1].year = prompt("แก้ไขปีที่พิมพ์");
            allBooks[edit - 1].price = prompt("แก้ไขราคา");
            alert("แก้ไขข้อมูลหนังสือเรียบร้อยแล้ว");
            mainMenu();
        }
    }
};

const deleteBook = () => {
    if (!allBooks.length) {
        alert("ไม่มีหนังสือในระบบ");
        mainMenu();
    } else {
        let text = "";
        allBooks.forEach((item, index) => {
            text = text.concat(`\nหมายเลข ${index + 1} : ${item.name} ${item.author
                } ${item.year} ${item.price}
       `);
        });
        const del = prompt("เลือกหมายเลขหนังสือที่จะลบ \n" + text);
        if (!allBooks[del - 1]) {
            alert("กรอกหมายเลขหนังสือผิดกรุณาทำรายการใหม่");
            mainMenu();
        } else {
            allBooks.splice(del - 1, 1);
            alert("ลบข้อมูลหนังสือเรียบร้อยแล้ว");
            mainMenu();
        }
    }
};

mainMenu();
