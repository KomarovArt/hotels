import {Component} from '@angular/core';
import {AlertController, ModalController,} from 'ionic-angular';
import {PersonalHotelsPage} from "../personalhotels/personalhotels";
import {InterfaceHotel} from "../interfaces/interface";

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {

  hotels: InterfaceHotel[];
  resulthotels: InterfaceHotel[];
  resulthotelsclone: InterfaceHotel[];
  pricecheckbox: boolean;
  pricefrom: number;
  priceto: number;

  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.hotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/get-altay/239474/2a0000015ca20db44009aa86e81c28c62756/XXL',
        title: 'Спутник',
        description: 'Гостиница "Спутник"',
        roomCost: 1800,
        hasParking: true,
        address: 'Вологда, Путейская ул., 14',
        phone: '8 (921) 827-89-06'
      },
      {
        imageUrl: 'https://img.magput.ru/pics/large/3144bb31-14e1-4326-8552-523a9270c5ab.jpg',
        title: 'Северные Зори',
        description: 'Гостиница "Северные Зори"',
        roomCost: 2400,
        hasParking: false,
        address: 'Череповец, ул. Краснодонцев, 30',
        phone: '8 (8202) 26-77-71'
      },
      {
        imageUrl: 'https://volgaclub.com/upload/iblock/5a7/5a72e0dbf09c9b98e9bd8db832493f5f.jpg',
        title: 'Volga',
        description: 'Отель "Волга"',
        roomCost: 2600,
        hasParking: true,
        address: 'Кострома, Юношеская ул., 1',
        phone: '8 (4942) 77-70-00'
      },
      {
        imageUrl: 'https://pic.voombu.ru/img/hotel/max1280x900/698/69857703.jpg',
        title: 'Корона',
        description: 'Гостиница "Корона"',
        roomCost: 1900,
        hasParking: false,
        address: ' Ярославль, просп. Октября, 88Б',
        phone: '8 (4852) 77-17-71'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/get-altay/223006/2a0000015b33112f8c435445fb38bf7d6400/XXL',
        title: 'Сияние Севера',
        description: 'Гостиница "Сияние Севера"',
        roomCost: 2600,
        hasParking: false,
        address: 'Вельск, Красная ул., 27',
        phone: '8 (81836) 6-21-69'
      },
      {
        imageUrl: 'https://smorodina.com/uploads/image/image/77479/2017-06-16_14-26-39_ok.jpg',
        title: 'Советская',
        description: 'Гостиница "Советская"',
        roomCost: 1000,
        hasParking: true,
        address: 'Котлас, ул. Карла Маркса, 10',
        phone: '8 (952) 302-95-71'
      },
      {
        imageUrl: 'http://photos.wikimapia.org/p/00/05/24/05/81_big.jpg',
        title: 'Вага',
        description: 'Гостиница "Вага"',
        roomCost: 1500,
        hasParking: true,
        address: 'Шенкурск, ул. Карла Маркса, д.34',
        phone: '8 (81851) 4-00-56'
      }
    ]

    this.resulthotels = this.hotels.slice();
    this.resulthotelsclone = this.hotels.slice();

  }

  goPersonalHotels(inputhotel) {
    let profileModal = this.modalCtrl.create(PersonalHotelsPage, {hotelinput: inputhotel});
    profileModal.present();
  }

  goFilterAlert() {
    (Number(this.pricefrom) > 0 && Number(this.pricefrom) > 0) ? this.goResultFromTo() : this.goPriceAlert();
  }


  goResultFromTo() {
    this.resulthotels.splice(0, this.resulthotels.length);
    this.resulthotelsclone.splice(0, this.resulthotelsclone.length);
    let x: number;
    if (this.pricecheckbox == true) {
      for (x = 0; x < this.hotels.length; x++) {
        if (this.hotels[x].hasParking == this.pricecheckbox) {
          this.resulthotelsclone.push(this.hotels[x]);
        }
      }
      for (x = 0; x < this.resulthotelsclone.length; x++) {
        if (this.resulthotelsclone[x].roomCost >= Number(this.pricefrom) && this.resulthotelsclone[x].roomCost <= Number(this.priceto)) {
          this.resulthotels.push(this.resulthotelsclone[x]);
        }
      }
    } else {
      for (x = 0; x < this.hotels.length; x++) {
        if (this.hotels[x].roomCost >= Number(this.pricefrom) && this.hotels[x].roomCost <= Number(this.priceto)) {
          this.resulthotels.push(this.hotels[x]);
        }
      }
    }
  }

  goPriceAlert() {
    const alert = this.alertCtrl.create({
      title: 'Введите пожалуйста верную стоимость гостиницы',
      subTitle: 'Введите стоимость больше 0, и чтобы "от" было меньше чем "до"',
      buttons: ['OK']
    });
    alert.present();
  }
}
