const ANGGOTA = {
    "Nizar":new Map([["Name","MUHAMAD NIZAR DHIAUDIN"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Panji":new Map([["Name","DENI PANJI HERLAMBANG"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Salma":new Map([["Name","Salma Zulala"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Farhan":new Map([["Name","Farhan Ma'shum Dholifunnas"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Nadya":new Map([["Name","Nadya Rizki Pratiwi"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Afiz":new Map([["Name","Muhammad Nur Afiz"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Rulan":new Map([["Name","Rulan indriana"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Eka":new Map([["Name","Eka fitriana"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "REVAN":new Map([["Name","REVAN REY FAHREZA"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
    "Riski":new Map([["Name","Riski Eka Nurhidaya"], ["Kelas","Ti4"], ["Kelompok","Android"], ["NIM","2022150105"],]),
}

function ExtractData() {
    let name = ANGGOTA[localStorage.getItem("name")]
    if (name == undefined){
        let h = document.createElement("h1")
        h.insertAdjacentText("afterbegin", "Tidak ada data!")
        document.body.appendChild(h)
        return
    }
    name.forEach((v,k) => {
        let tr = document.createElement('tr')
        let key = tr.insertCell()
        let colon = tr.insertCell()
        let value = tr.insertCell()
        key.insertAdjacentText("afterBegin", `${k}`)
        colon.insertAdjacentText("afterBegin", `:`)
        value.insertAdjacentText("afterBegin", `${v}`)
        let ct = document.getElementById("table1")
        ct.appendChild(tr)
        for (let index = 0; index < 4; index++) {
            ct.appendChild(document.createElement('tr'))
        }
    })
    document.title = localStorage.getItem("name")
}