class Anggota{
    constructor(name, nim, kelas, kelompok, pic=null, href=null){
        this.name = new String(name)
        this.nim = new String(nim)
        this.kelas = new String(kelas)
        this.kelompok = new String(kelompok)
        this.pic = new String(pic)
        this.href = (href == null)?"Anggota.html":href
    }
    to_mapping(){
        return new Map([["Name",this.name], ["NIM",this.nim], ["Kelompok",this.kelompok], ["Kelas",this.kelas],["Picture", this.pic]])
    }
}

const ANGGOTAS = new Map([
    ["Nizar",new Anggota("MUHAMAD NIZAR DHIAUDIN", "2022150105", "Ti4", "Android", "aset/andro.jpg", "./nizar.html")],
    ["Salma",new Anggota("Salma Zulala", "2022150105", "Ti4", "Android", "aset/andro.jpg", "Anggota/salma/salma.html")],
    ["Rulan",new Anggota("Rulan indriana", "2022150105", "Ti1", "Android", null, "Anggota/Rulan/Latihan.html")],
    ["Afiz",new Anggota("Muhammad Nur Afiz", "2022150105", "Ti4", "Android", "aset/andro.jpg", "Anggota/Afiz/Afiz.html")],
    ["Bimo",new Anggota("BimBim", "2022150105", null, null, null, "Anggota/BimBim/Index.html")],
    ["Riski",new Anggota("Riski Eka Nurhidaya", "2022150105", "Ti4", "Android", "aset/andro.jpg","Anggota/riski/riski.html")],
    ["Farhan",new Anggota("Farhan Ma'shum Dholifunnas", "2022150105", "Ti4", "Android", "aset/andro.jpg","Anggota/Farhan/Farhan-ma'shum.html")],
    ["Eka",new Anggota("Eka fitriana", "2022150105", "Ti4", "Android", "aset/andro.jpg","Anggota/portofolio/ef.html")],
    ["REVAN",new Anggota("REVAN REY FAHREZA", "2022150105", "Ti4", "Android", "aset/andro.jpg",)],
])

const ExtractData = (_name=null) => { 
    let name = (_name == null)?ANGGOTAS.get(localStorage.getItem("name")):ANGGOTAS.get(_name)
    if (name == undefined){
        let h = document.createElement("h1")
        h.insertAdjacentText("afterbegin", "Tidak ada data!")
        document.body.appendChild(h)
        return
    }
    name.to_mapping().forEach((v,k) => {
        let tr = document.createElement('tr')
        tr.insertCell().insertAdjacentText("afterBegin", `${k}`)
        tr.insertCell().insertAdjacentText("afterBegin", `:`)
        tr.insertCell().insertAdjacentText("afterBegin", `${v}`)
        let ct = document.getElementById("table1")
        ct.appendChild(tr)
        for (let index = 0; index < 4; index++) {
            ct.appendChild(document.createElement('tr'))
        }
    })
    document.title = localStorage.getItem("name")
};