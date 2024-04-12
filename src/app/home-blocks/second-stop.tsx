import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Image } from "@nextui-org/react";

const SecondStop = () => {
    return (
        <div className="w-full bg-[url('https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center p-5 px-3 lg:p-10 lg:px-24">
            
            <div className="bg-gray-50 bg-opacity-60 lg:pb-7">
                <div className="px-5 py-3 lg:py-7 lg:px-16 lg:pt-4 text-center">
                    <FontAwesomeIcon size="3x" icon={fa2} className="border-2 border-black rounded-full p-5 px-7" />
                    <h2 className="font-bold text-3xl lg:text-4xl lg:my-3">Друга зупинка - &quot;Збір врожаю&quot;</h2>
                    <div className="text-xl font-medium text-left leading-8 flex flex-col lg:grid lg:grid-cols-1 lg:grid-rows-4 lg:gap-8 lg:leading-10">
                        <div className="flex flex-col gap-4 my-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-8 lg:justify-items-center lg:items-center">
                            <p className="lg:col-span-2">Продовжуючи нашу подорож, ми переходимо до одного з найбільш очікуваних моментів у житті ферми — збору врожаю. Ця зупинка відкриває перед вами всю красу та важливість завершальної стадії аграрного циклу, де кожна рослина, кожен плід є результатом кропіткої праці та турботи</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/7658822/pexels-photo-7658822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <Divider className="lg:hidden" />
                        </div>
                        
                        <div className="flex flex-col-reverse gap-4 my-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-8 lg:justify-items-center lg:items-center">
                            <Divider className="lg:hidden" />
                            <Image
                                alt="Harvest fruits and vegetables"
                                src="https://images.pexels.com/photos/7728874/pexels-photo-7728874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="lg:col-span-2">На цій зупинці ви не просто спостерігачі, а активні учасники. Вам буде запропоновано взяти участь у зборі врожаю разом з нашою командою. Ви відчуєте на собі, як це — збирати яблука у фруктовому саду, знімати помідори та огірки з грядок, або ж збирати соковиті ягоди прямо з кущів. Це унікальна можливість доторкнутися до самої суті фермерства, відчути зв&apos;язок з землею та зрозуміти, скільки зусиль потрібно для того, щоб виростити якісні та екологічно чисті продукти</p>
                        </div>

                        <div className="flex flex-col gap-4 my-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-8 lg:justify-items-center lg:items-center">
                            <p className="lg:col-span-2">Під час збору врожаю ви також дізнаєтесь більше про різні сорти рослин, методи їх вирощування, а також про техніки зберігання та переробки продукції. Ми розкажемо вам, як правильно визначати стиглість плодів, щоб збір врожаю був максимально ефективним та безвідходним</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/18551846/pexels-photo-18551846/free-photo-of-jars-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <Divider className="lg:hidden" />
                        </div>

                        <div className="flex flex-col-reverse gap-4 my-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-8 lg:justify-items-center lg:items-center">
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="lg:col-span-2">Збір врожаю — це не просто важлива частина аграрного процесу, а й час святкування та подяки землі за її щедрість. Це можливість відчути себе частиною великої природної системи, яка живить і підтримує життя на нашій планеті. Після трудових буднів на вас чекає смачне застілля з продуктами, вирощеними власноруч, де кожен зможе оцінити справжній смак і якість свіжозібраного врожаю</p>
                        </div>
                        
                        
                        
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default SecondStop;