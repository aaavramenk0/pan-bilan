import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";

const SecondStop = () => {
    return (
        <div className="w-full bg-[url('https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center p-10 px-24" id="aboutus">
            
            <div className="bg-gray-50 bg-opacity-60 pb-7">
                <div className="px-16 py-7 pt-4 text-center">
                    <FontAwesomeIcon size="3x" icon={fa2} className="border-2 border-black rounded-full p-5 px-7" />
                    <h2 className="font-bold text-4xl my-3">Друга зупинка - &quot;Збір врожаю&quot;</h2>
                    <div className="grid grid-rows-4 text-xl font-medium text-left leading-10">
                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <p className="col-span-2">Продовжуючи нашу подорож, ми переходимо до одного з найбільш очікуваних моментів у житті ферми — збору врожаю. Ця зупинка відкриває перед вами всю красу та важливість завершальної стадії аграрного циклу, де кожна рослина, кожен плід є результатом кропіткої праці та турботи</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/7658822/pexels-photo-7658822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                        </div>
                        
                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <Image
                                alt="Harvest fruits and vegetables"
                                src="https://images.pexels.com/photos/7728874/pexels-photo-7728874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="col-span-2">На цій зупинці ви не просто спостерігачі, а активні учасники. Вам буде запропоновано взяти участь у зборі врожаю разом з нашою командою. Ви відчуєте на собі, як це — збирати яблука у фруктовому саду, знімати помідори та огірки з грядок, або ж збирати соковиті ягоди прямо з кущів. Це унікальна можливість доторкнутися до самої суті фермерства, відчути зв&apos;язок з землею та зрозуміти, скільки зусиль потрібно для того, щоб виростити якісні та екологічно чисті продукти</p>
                        </div>

                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <p className="col-span-2">Під час збору врожаю ви також дізнаєтесь більше про різні сорти рослин, методи їх вирощування, а також про техніки зберігання та переробки продукції. Ми розкажемо вам, як правильно визначати стиглість плодів, щоб збір врожаю був максимально ефективним та безвідходним</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/18551846/pexels-photo-18551846/free-photo-of-jars-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                        </div>

                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="col-span-2">Збір врожаю — це не просто важлива частина аграрного процесу, а й час святкування та подяки землі за її щедрість. Це можливість відчути себе частиною великої природної системи, яка живить і підтримує життя на нашій планеті. Після трудових буднів на вас чекає смачне застілля з продуктами, вирощеними власноруч, де кожен зможе оцінити справжній смак і якість свіжозібраного врожаю</p>
                        </div>
                        
                        
                        
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default SecondStop;