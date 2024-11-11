// console.log("hello Solikhov");
// console.log("hello Solikhovaaaa");
// console.log("hello Solikhovaaaa1");
// console.log('Abdulloh');

const InputElement = document.getElementById("parol") as HTMLInputElement;
const InputElement1 = document.getElementById("tel") as HTMLInputElement;
const tbody = document.getElementById("tbody") as HTMLTableSectionElement;

let btn = document.getElementById("btn") as HTMLButtonElement;

const Login = document.getElementById("login") as HTMLDivElement;
let time = document.getElementById("Date") as HTMLParagraphElement;
let xatolik = document.getElementById("xatolik") as HTMLSpanElement;

btn?.addEventListener("click", () => {
  InputElement.innerHTML = "";

  let input_parol = InputElement.value;

  let input_tel = Number(InputElement1.value);

  let parol = "1234";

  xatolik.innerHTML = "";

  console.log(input_tel);

  if (input_parol == parol && !isNaN(input_tel)) {
    window.location.href = "../dist/index.html";
  } else {
    const p = document.createElement("p");

    p.textContent = "Raqam yoki Parol noto‘g‘ri kiritildi";

    xatolik.appendChild(p);

    setTimeout(() => {
      xatolik.removeChild(p);
    }, 3000);
  }
});

function yangilash() {
  const data = new Date();

  const formattedDate = data.toLocaleString("ru-RU", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  time.innerHTML = formattedDate;
}

setInterval(yangilash, 1000);

const Exit = <HTMLButtonElement>document.getElementById("Exit");

Exit.addEventListener("click", () => {
  if (true) {
    window.location.href = "../login.html/login.html";
  }
});
let ArrUser : any = [] ;
async function Persons(url: any): Promise<any> {
    try{

  let respon = await fetch(url);
  let promise = await respon.json();

//   console.log(promise);

  ArrUser.push(...promise);

  return promise;

    }catch(error){
        console.log('xatolik bor',error);
        
    };
    

}

    async function PrintUser() {
      await Persons("http://localhost:3000/Users");

    //   interface person {
    //     No: number;
    //     Num: number;
    //     name: string;
    //     status: string;
    //     price: number;
    //   }

      tbody.innerHTML = "";

      let tr = document.createElement("tr");

          ArrUser.forEach((item: any) => {
            console.log(item);
            let tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${item.No}</td>
              <td>${item.Num}</td>
              <td class="flex items-center gap-3">${item.name}</td>
              <td>${item.status}</td>
              <td>${item.price}$</td>
              <td><button class="text-[black] p-2  items-center text-[14px] rounded-[4px]">Details</button></td>
           `;
            tbody.appendChild(tr);
          });

    }
PrintUser()
console.log('asdasd');
