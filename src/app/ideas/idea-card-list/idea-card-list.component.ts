import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-card-list',
  templateUrl: './idea-card-list.component.html',
})
export class IdeaCardListComponent implements OnInit {
  options = [
    { id: 1, name: 'First added' },
    { id: 2, name: 'Last added' },
    { id: 3, name: 'Most votes' },
    { id: 4, name: 'Most commented' },
    { id: 6, name: 'Most popular' },
  ];

  districts = [
    { id: 'Āgenskalns', name: 'Āgenskalns' },
    { id: 'Atgāzene', name: 'Atgāzene' },
    { id: 'Avotu apkaime‎', name: 'Avotu apkaime‎' },
    { id: 'Beberbeķi', name: 'Beberbeķi' },
    { id: 'Berģi', name: 'Berģi' },
    { id: 'Bieriņi', name: 'Bieriņi' },
    { id: 'Bišumuiža', name: 'Bišumuiža' },
    { id: 'Bolderāja', name: 'Bolderāja' },
    { id: 'Brasa', name: 'Brasa' },
    { id: 'Brekši', name: 'Brekši' },
    { id: 'Bukulti', name: 'Bukulti' },
    { id: 'Buļļi‎', name: 'Buļļi‎' },
    { id: 'Centrs', name: 'Centrs' },
    { id: 'Čiekurkalns', name: 'Čiekurkalns' },
    { id: 'Dārzciems', name: 'Dārzciems' },
    { id: 'Dārziņi', name: 'Dārziņi' },
    { id: 'Daugavgrīva', name: 'Daugavgrīva' },
    { id: 'Dreiliņi', name: 'Dreiliņi' },
    { id: 'Dzirciems', name: 'Dzirciems' },
    { id: 'Grīziņkalns', name: 'Grīziņkalns' },
    { id: 'Iļģuciems', name: 'Iļģuciems' },
    { id: 'Imanta', name: 'Imanta' },
    { id: 'Jaunciems', name: 'Jaunciems' },
    { id: 'Jugla', name: 'Jugla' },
    { id: 'Katlakalns', name: 'Katlakalns' },
    { id: 'Kleisti', name: 'Kleisti' },
    { id: 'Kundziņsala', name: 'Kundziņsala' },
    { id: 'Ķengarags', name: 'Ķengarags' },
    { id: 'Ķīpsala', name: 'Ķīpsala' },
    { id: 'Lucavsala', name: 'Lucavsala' },
    { id: 'Mangaļsala', name: 'Mangaļsala' },
    { id: 'Maskavas Forštate', name: 'Maskavas Forštate' },
    { id: 'Mežaparks', name: 'Mežaparks' },
    { id: 'Mežciems', name: 'Mežciems' },
    { id: 'Mīlgrāvis', name: 'Mīlgrāvis' },
    { id: 'Mūkupurvs', name: 'Mūkupurvs' },
    { id: 'Pētersala-Andrejsala', name: 'Pētersala-Andrejsala' },
    { id: 'Pleskodāle', name: 'Pleskodāle' },
    { id: 'Pļavnieki', name: 'Pļavnieki' },
    { id: 'Purvciems', name: 'Purvciems' },
    { id: 'Rumbula', name: 'Rumbula' },
    { id: 'Salas', name: 'Salas' },
    { id: 'Sarkandaugava', name: 'Sarkandaugava' },
    { id: 'Skanste', name: 'Skanste' },
    { id: 'Spilve', name: 'Spilve' },
    { id: 'Suži', name: 'Suži' },
    { id: 'Šampēteris', name: 'Šampēteris' },
    { id: 'Šķirotava', name: 'Šķirotava' },
    { id: 'Teika', name: 'Teika' },
    { id: 'Torņakalns', name: 'Torņakalns' },
    { id: 'Trīsciems', name: 'Trīsciems' },
    { id: 'Vecāķi', name: 'Vecāķi' },
    { id: 'Vecdaugava', name: 'Vecdaugava' },
    { id: 'Vecmīlgrāvis', name: 'Vecmīlgrāvis' },
    { id: 'Vecrīga', name: 'Vecrīga' },
    { id: 'Voleri', name: 'Voleri' },
    { id: 'Zasulauks', name: 'Zasulauks' },
    { id: 'Ziepniekkalns', name: 'Ziepniekkalns' },
    { id: 'Zolitūde', name: 'Zolitūde' }
  ];

  categories = [
    { id: 1, name: 'Atpūta & infrastruktūra' },
    { id: 2, name: 'Vide' },
    { id: 3, name: 'Ielas un ietves' },
    { id: 4, name: 'Satiksmes organizācija' },
    { id: 6, name: 'Pilsētas ainava' },
  ];

  ngOnInit() {}
}
