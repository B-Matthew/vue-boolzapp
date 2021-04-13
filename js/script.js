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
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'No, non mi serve!',
              status: 'received'
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Guarda che non puoi andare in giro senza!! :D',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'Ah no?? Non posso?',
              status: 'received'
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
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'Dovevamo trovarci qui alle 9.00 in punto',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Arrivo arrivo!',
              status: 'received'
            },
            {
            date: '10/01/2020',
            hours: '16:15',
            text: 'Ho fatto pausa per comprare della roba per dopo! :)',
            status: 'received'
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
              status: 'received'
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: '??? Tutto bene?',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'Scusa, ho sempre questo singhiozzo che mi parte a caso... ',
              status: 'received'
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
              status: 'sent'
            },
            {
              date: '10/01/2020',
              hours: '15:50',
              text: 'O LETTO??? CAPRA,CAPRA,CAPRA,CAPRA,CAPRA,CAPRA,CAPRA!',
              status: 'received'
            },
            {
              date: '10/01/2020',
              hours: '16:15',
              text: 'ops',
              status: 'sent'
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
              status: 'sent'
            },
            {
              date: '20/03/2020',
              hours: '16:30',
              text: "Sisi ho trovato le gelatineeee.. C'è cioccolato e menta piperita. E c'è anche spinaci, fegato e trippa. George giura che ne ha trovata una al gusto di caccole!",
              status: 'received'
            },
            {
              date: '20/03/2020',
              hours: '16:35',
              text: 'Bleah, quella roba piace solo a te',
              status: 'sent'
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
              status: 'received'
            },
            {
              date: '28/03/2020',
              hours: '10:20',
              text: 'Hai sbagliato chat ancora......',
              status: 'sent'
            },
            {
              date: '28/03/2020',
              hours: ' 16:18',
              text: 'Ah scusa!',
              status: 'received'
            },
            {
              date: '28/03/2020',
              hours: '16:18',
              text: 'MONELLO!',
              status: 'received'
            }
          ],
        },
      ],
      current: 0,
      val: "",
      showChat: false,
      search:""
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
