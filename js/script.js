function initVue() {

  new Vue ({
    el: ".flex-generale",

    data: {
      contacts: [
        {
          name: 'Matteo S.',
          avatar: 'img/Salvini.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              hours: '15:30',
              text: 'Hai preso la mascherina?',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'No, non mi serve!',
              status: 'received',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Guarda che non puoi andare in giro senza!! :D',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'Ah no?? Non posso?',
              status: 'received',
              drop: false
            },
          ],
        },
        {
          name: 'Gandalf',
          avatar: 'img/Gandalf.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              hours: '15:30',
              text: 'Dove sei??',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'Dovevamo trovarci qui alle 9.00 in punto',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Arrivo arrivo!',
              status: 'received',
              drop: false
            },
            {
            date: '10/01/2020',
            hours: '16:15',
            text: 'Ho fatto pausa per comprare della roba per dopo! :)',
            status: 'received',
            drop: false
          }
          ],
        },
        {
          name: 'Pippo',
          avatar: 'img/Pippo.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              hours: '15:30',
              text: 'Aigloah!',
              status: 'received',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: '??? Tutto bene?',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Scusa, ho sempre questo singhiozzo che mi parte a caso... ',
              status: 'received',
              drop: false
            }
          ],
        },
        {
          name: 'Maestro Sgarbi',
          avatar: 'img/Sgarbi.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              hours: '15:30',
              text: 'Salve Maestro, o letto il suo libro!',
              status: 'sent',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'O LETTO??? CAPRA,CAPRA,CAPRA,CAPRA,CAPRA,CAPRA,CAPRA!',
              status: 'received',
              drop: false
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'ops',
              status: 'sent',
              drop: false
            }
          ],
        },

        {
          name: 'Harry',
          avatar: 'img/harry.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020',
              hours: '16:30',
              text: 'Hai preso tutto per stasera? Dai che dobbiamo preparare',
              status: 'sent',
              drop: false
            },
            {
              date: '20/03/2020',
              hours: '16:30',
              text: "Sisi ho trovato le gelatineeee.. C'?? cioccolato e menta piperita. E c'?? anche spinaci, fegato e trippa. George giura che ne ha trovata una al gusto di caccole!",
              status: 'received',
              drop: false
            },
            {
              date: '20/03/2020',
              hours: '16:35',
              text: 'Bleah, quella roba piace solo a te',
              status: 'sent',
              drop: false
            }
          ],
        },
        {
          name: 'Giuseppe',
          avatar: 'img/giuseppe-simone.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020',
              hours: '10:10',
              text: 'MONELLA!',
              status: 'received',
              drop: false
            },
            {
              date: '28/03/2020',
              hours: '10:20',
              text: 'Hai sbagliato chat ancora......',
              status: 'sent',
              drop: false
            },
            {
              date: '28/03/2020',
              hours: ' 16:18',
              text: 'Ah scusa!',
              status: 'received',
              drop: false
            },
            {
              date: '28/03/2020',
              hours: '16:18',
              text: 'MONELLO!',
              status: 'received',
              drop: false
            }
          ],
        },
      ],
      current: 0,
      val: "",
      showChat: false,
      search:"",
      night: false,
    },


    methods: {
      // FUNZIONE PER PRENDERE L'ELEMENTO DEL CONTATTO CLICCATO IN CONTACTS
      contact: function(elem) {
        this.current = elem;
        this.showChat = true;
      },
      // FUNZIONE PER FILTRARE NELLA SEARCHBAR
      filteredList: function() {
      return this.contacts.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
      // FUNZIONE PER OTTENERE L'ORARIO REALE
       currentData: function() {
         const now = new Date();
         const minutes = now.getMinutes();
         let dateNow = now.getHours() + ":" + minutes;
         if (minutes < 10) {

            dateNow = now.getHours()+":"+"0"+ minutes;
         }
         return dateNow;
       },
       // FUNZIONE PER MANDARE MESSAGGI + SET TIMEOUT
       addMsg: function() {

         const msgSent = {
           date: '28/03/2020',
           hours: this.currentData(),
           text: this.val,
           status: 'sent'
         }
         this.val="";
         this.current.messages.push(msgSent);
         this.answerInt();
         // this.setTimeout(this.answerInt,1000);
       },
       // FUNZIONE PER RICEVERE RISPOSTA
       answerInt: function () {
         const currentmsg = this.current.messages;
         setTimeout(() => {

           const answer = {
             date: '28/03/2020',
             hours: this.currentData(),
             text: "Ok",
             status: 'received'
           }
           currentmsg.push(answer);
         },1000);
       },
       // FUNZIONE PER LA NIGHT MODE
       nightMode: function() {
         this.night = !this.night;
       },

       // DROP TABLE
       dropTable: function(elem) {
         elem.drop = !elem.drop;

         console.log(elem);
       },


       // FUNZIONE PER CANCELLARE IL MESSAGGIO SELEZIONATO
       deleteMsg: function(indice) {
         this.current.messages.splice(indice,1)
       }
     }
   });
 }

 function init() {
   initVue();
 }

 $(init);
