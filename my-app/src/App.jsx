import React from 'react'
import background from './assets/bg1.png';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import Cards from './components/Cards';
import Domiki from './components/Domiki';
import dom2 from './assets/dom2.png';
import partner from './assets/partner.png';
import Text from './components/Text';
import adress from './assets/adress.png';
import contact from './assets/contacts.png';
import vremya from './assets/vremya.png';
import email from './assets/email.png';

function App() {
  return (
    <div className='w-[100%]'>
        <header className='' style={{ backgroundImage: `url(${background})` }}>
       
            <nav className='flex justify-evenly items-center py-[2vh]'>
              <section>  
                <img src={logo} className='w-[50px]' />
              </section>  
              <section>    
                <img src={menu} className='w-[50px]' />
              </section>
            </nav>
          
            <section className='flex justify-center flex-col py-[25vh]'>
                <h1 className='text-white text-center text-[40px] font-bold'>РЕАЛИЗУЕМ КРУПНЕЙШИЕ <br />ПРОЕКТЫ B РОССИИ</h1> <br />
                <p className='text-white text-center'>стадионы, газопроводы, мосты, дамбы</p>
            </section>
       
        </header>
        <main className='w-[100%]'>
       
            <section className=' sm:flex items-center justify-evenly'> 
              <Cards/>
              <Cards/>
              <Cards/>
            </section>
             
            <section className='bg-[#F7654A] md:flex justify-between text-white p-16'>
                <section className='md:flex flex-col justify-center items-center text-center'>
                  <p className='text-[35px font-bold'>САМЫЕ УМНЫЕ ПРОЕКТЫ</p> <br />
                  <p className='text-[25px font-bold'>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ B РОССИИ!</p>
                </section>
                <section className='flex justify-center items-center'>
                    <button className='px-[10vh] py-[2.5vh] border'>
                        ВАШ ЗАПРОС
                    </button>
                </section>
              </section>

              <section className='md:flex flex-col justify-center items-center'>
                  <section className='w-[100%] text-center text-[35px] font-bold py-[5vh]'>
                    <h2>ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>
                  </section>
                  <section className='w-[100%] md:flex flex-col gap-5'>
                      <section className='sm:flex justify-evenly'>
                          <Domiki/>
                          <Domiki/>
                          <Domiki/>
                      </section>
                      <section className='sm:flex  justify-evenly'>
                          <Domiki/>
                          <Domiki/>
                          <Domiki/>
                      </section>
                  </section>
              </section>

              <section className='w-[100%] py-5'>
                  <section className='md:flex'>
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  </section>
                  <section className='md:flex'>
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  <img src={dom2} className='md:w-[25%]' />
                  </section>
              </section>

              <section className='w-[100%] space-y-5 py-[4vh]'>
                  <p className='text-center text-[25px] font-bold'>ОТВЕТЫ НА ВОПРОСЫ</p> <br />
                  <p className='text-[#999999] sm:px-[15vh]'>
                      <span className='text-[#F7654A] text-[25px]'>
                      ► РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ? <br />
                      ▲ РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ? <br />
                      </span>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum <br />
                        является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий <br />
                        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя <br />
                        Lorem Ipsum для распечатки образцов.  <br />
                      <span className='text-[#F7654A] text-[25px]'>
                      ► РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ? <br />
                      ► РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ? <br />
                      </span>
                  </p>
              </section>

              <section className='w-[100%] md:flex flex-col text-center py-[8vh] space-y-5 bg-[#404149] text-white'>
                   <p className='text-[25px] font-bold'>наши партнеры</p>
                  <section className='w-[100%] px-[15vh] md:flex justify-around'>
                      <img src={partner} alt="" />
                      <img src={partner} alt="" />
                      <img src={partner} alt="" />
                      <img src={partner} alt="" />
                      <img src={partner} alt="" />
                  </section>
              </section>

              <section className='w-[100%] md:flex flex-col p-[5vh]'>
                      <p className='text-[25px] font-bold text-center py-[5vh]'>отзывы о работе с нами</p>
                    <section className='w-[100%] md:flex justify-around items-center' >
                        <Text/> <Text/> <Text/> 
                    </section>
              </section>

              <section className='bg-[#F7654A] md:flex justify-between text-white p-16'>
                <section className='md:flex flex-col justify-center items-center text-center'>
                  <p className='text-[35px font-bold'>ХОТИТЕ С НАМИ РАБОТАТЬ?</p> <br />
                  <p className='text-[25px font-bold'>ОСТАВЬТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ!</p>
                </section>
                <section className='flex justify-center items-center'>
                    <button className='px-[10vh] py-[2.5vh] border'>
                        ВАШ ЗАПРОС
                    </button>
                </section>
              </section>

        </main>
        <footer className='w-[100%]'>
            <section className='w-[100%] text-center py-[7vh] text-[35px] font-bold'>
              КОНТАКТЫ
            </section>
            <section className='md:flex justify-around py-5'>
                <img src={adress} alt="" />
                <img src={contact} alt="" />
                <img src={vremya} alt="" />
                <img src={email} alt="" />
            </section>
            <section className='w-[100%] md:flex justify-evenly py-[5vh] bg-[#404149] text-white'>
                <p>© 2019 Строительная компания</p>
                <p>Разработано лучшей студей</p>
            </section>
        </footer>
    </div>
  )
}

export default App