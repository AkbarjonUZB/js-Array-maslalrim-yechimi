// 1- amaliyot (Faqat Arrayga oid)

// 1. O'zingizni shaxsiy jovoningizda nimalar bor barchasini bir arrayga yig'ib bering. Kamida 5 ta e'lement bo'lsin.


//  const shxsiyJavon = ["kastyum","koylak","galistuk","pull",200000]

// 2. Endi bu jovongizdagi yigilgan narsalarga biror yangi element qo'shing. Shunday siz yasagan array soni bir donaga ko'payishi kerak.


//  const shxsiyJavon = ["kastyum","koylak","galistuk","pull",200000]
//  let x = shxsiyJavon.push("fidbolka")
//  document.write(x+"<br>")
//  console.log(shxsiyJavon);
//  document.write(shxsiyJavon)




// 3. Bu arrayingizdan 2 chi o'rinda turgan elemntingizni arraydan olib tashlang.

//  const shxsiyJavon = ["kastyum","koylak","galistuk","pull",200000] //// meni oyhatimda indeks boyicha 2 orinda galistuk bor u ochdi indeksdan hisobladin

//  shxsiyJavon.splice(2,1)
//  console.log(shxsiyJavon)





// 4. Arrayingizni 3 inch o'rinda turgan elementini lib o'rniga boshqa biror element qo'yib bering


//  const shxsiyJavon = ["kastyum","koylak","galistuk","pull",200000] //// meni oyhatimda indeks boyicha 3-orinda pull  bor u ochdi orniga telpak yozildi

//  shxsiyJavon.splice(3,1,"Telpak")
//  console.log(shxsiyJavon)




//  2- amaliyot (Array va Objectga oid)

// 1. 5 ta studentdan tashkil topgak kursdoshlar arrayini yarating.

// 	Array ichidagi har bir Objectda quyidagi elementlari bo'lsin:
// 	- name
// 	- surename
// 	- born
// 	- group

// const Talabalar =[{
//    name: "Ahlidin",
//    surename: "Shermatov",
//    born: 1996,
//    group: 403,
  
//    name: "Anvarjon",
//    surename: "Mingboyev",
//    born: 2003,
//    group: 403,
  
//    name: "Akmaljon",
//    surename: "Adulahatov",
//    born: 2001,
//    group: 403,
  
//    name: "Akbarjon",
//    surename: "Rahmonov",
//    born: 1997,
//    group: 403,
  
//    name: "Ahmadillo",
//    surename: "Xasanov",
//    born: 2000,
//    group: 403,

// }
// ]

	
// 2. Studentlarning faqat ismlarini chiqarib bering

// const Talabalar = [
//  {
//    name: "Ahlidin",
//    surename: "Shermatov",
//    born: 1996,
//    group: 403,
//  },
//  {
//    name: "Anvarjon",
//    surename: "Mingboyev",
//    born: 2003,
//    group: 403,
//  },
//  {
//    name: "Akmaljon",
//    surename: "Adulahatov",
//    born: 2001,
//    group: 403,
//  },
//  {

//    name: "Akbarjon",
//    surename: "Rahmonov",
//    born: 1997,
//    group: 403,
//  },
//  {
//    name: "Ahmadillo",
//    surename: "Xasanov",
//    born: 2000,
//    group: 403,

// }

// ]
// for(let i = 0; i < Talabalar.length; i++){
//    console.log(Talabalar[i].name);
// }

// 3. Studentlarning ismlari va guruhini qo'shib chiqarib bering


// const Talabalar = [
//    {
//      name: "Ahlidin",
//      surename: "Shermatov",
//      born: 1996,
//      group: 403,
//    },
//    {
//      name: "Anvarjon",
//      surename: "Mingboyev",
//      born: 2003,
//      group: 403,
//    },
//    {
//      name: "Akmaljon",
//      surename: "Adulahatov",
//      born: 2001,
//      group: 403,
//    },
//    {
  
//      name: "Akbarjon",
//      surename: "Rahmonov",
//      born: 1997,
//      group: 403,
//    },
//    {
//      name: "Ahmadillo",
//      surename: "Xasanov",
//      born: 2000,
//      group: 403,
  
//   }
  
//   ]
//   for(let i = 0; i < Talabalar.length; i++){
//      console.log(Talabalar[i].name);
//      console.log(Talabalar[i].group);
//   }
// 4. Studentlarning ismlari, tug'ilgan kuni va guruhini qo'shib chiqarib bering

// const Talabalar = [
//    {
//      name: "Ahlidin",
//      surename: "Shermatov",
//      born: 1996,
//      group: 403,
//    },
//    {
//      name: "Anvarjon",
//      surename: "Mingboyev",
//      born: 2003,
//      group: 403,
//    },
//    {
//      name: "Akmaljon",
//      surename: "Adulahatov",
//      born: 2001,
//      group: 403,
//    },
//    {
  
//      name: "Akbarjon",
//      surename: "Rahmonov",
//      born: 1997,
//      group: 403,
//    },
//    {
//      name: "Ahmadillo",
//      surename: "Xasanov",
//      born: 2000,
//      group: 403,
  
//   }
  
//   ]
//   for(let i = 0; i < Talabalar.length; i++){
//      console.log(`\n ism => ${Talabalar[i].name} \n <br> Tug'ulgan yili => ${Talabalar[i].born} \n Talabaning guruxi => ${Talabalar[i].group}`);
//   }