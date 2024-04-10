import { fa4 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";

const FourthStop = () => {
    return (
        <div className="w-full bg-[url('https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center p-10 px-24" id="aboutus">
            
            <div className="bg-gray-50 bg-opacity-60 pb-7">
                <div className="px-16 py-7 pt-4 text-center">
                    <FontAwesomeIcon size="3x" icon={fa4} className="border-2 border-black rounded-full p-5 px-6" />
                    <h2 className="font-bold text-4xl my-3">Четверта зупинка - &quot;Збір врожаю&quot;</h2>
                    <div className="grid grid-rows-4 text-xl font-medium text-left leading-10">
                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <p className="col-span-2">Наша фінальна зупинка веде нас у світ дитячих спогадів та ностальгії, де кожен кадр має історію. &quot;Фотокартка як з дитинства&quot; — це ваша унікальна можливість зануритися в атмосферу минулого та створити незабутні спогади. Завершіть свою подорож по фермі, залишивши за собою слід у часі, фотографію, яка зможе розповісти про ваш незабутній день, проведений серед природи та історій, які нас оточують.</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/9201367/pexels-photo-9201367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                        </div>
                        
                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <Image
                                alt="Harvest fruits and vegetables"
                                src="https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="col-span-2">Ми створили особливі локації на території нашої ферми, де ви можете відтворити світлини з дитинства чи створити нові у стилі &quot;як колись&quot;. Чи то буде фотографія на тлі старовинного фермерського будинку, серед лугів з дикими квітами або поруч зі старим деревом, яке могло б бачити багато історій — кожне місце чекає, щоб стати частиною вашої історії.</p>
                        </div>

                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <p className="col-span-2">Ми запрошуємо вас принести старі сімейні фотографії, якщо ви хочете відтворити ці моменти, або просто прийти та дозволити нам допомогти створити нові спогади, які ви будете цінувати роками. Наш фотограф допоможе вам вибрати ідеальні ракурси та пози, щоб кожен знімок був особливим.</p>
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/3419719/pexels-photo-3419719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                        </div>

                        <div className="grid grid-cols-3 justify-items-center items-center">
                            <Image
                                alt="Harvesting"
                                src="https://images.pexels.com/photos/7782158/pexels-photo-7782158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={400}
                            />
                            <p className="col-span-2">Ця зупинка — про зв&apos;язок поколінь, про теплі спогади та моменти, які об&apos;єднують сім&apos;ю. &quot;Фотокартка як з дитинства&quot; дає вам можливість не просто згадати минуле, а й створити нові історії, які одного дня стануть частиною вашого спадку.</p>
                        </div>
                        
                        
                        
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default FourthStop;