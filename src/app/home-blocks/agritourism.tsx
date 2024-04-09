import { Image } from "@nextui-org/react";

const Agrotourism = () => {
    return (
        <div className="w-full bg-[url('https://images.pexels.com/photos/175389/pexels-photo-175389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center p-10 px-24" id="aboutus">
            
            <div className="bg-gray-50 bg-opacity-60 pb-7">
                <div className="px-16 py-7 pt-4">
                    <h1 className="font-bold text-4xl my-4 text-center">Що таке агротуризм?</h1>
                    <p className="text-xl font-medium">Агротуризм — це відпочинковий вид туризму, зосереджений на сільських територіях і передбачає використання сільського фермерського) господарства з метою рекреації, освіти та активного залучення відпочиваючих до традиційних форм господарювання. Деякі українські науковці під аграрним туризмом розуміють туристську діяльність на території сільськогосподарських (фермерських) угідь, де є умови для виробництва сільськогосподарської продукції і відпочинку міського населення з добровільним частковим залученням бажаючих до деяких видів сільськогосподарських робіт. Агротуризм — це екологічно стійкий вид туризму, який направлений на ознайомлення та використання природних, культурно-історичних та інших ресурсів сільської місцевості для створення туристичного продукту.</p>
                </div>
            
                <div className="grid grid-rows-3 grid-flow-col place-content-evenly">
                    <div className="row-end-3 row-span-2">
                        <Image
                            width={400}
                            alt="NextUI hero Image"
                            src="https://images.pexels.com/photos/18581690/pexels-photo-18581690/free-photo-of-cows-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
                        />
                    </div>
                    
                    <div className="row-start-2 row-span-2">
                        <Image
                            width={400}
                            alt="NextUI hero Image"
                            src="https://images.pexels.com/photos/5529604/pexels-photo-5529604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    
                    <div className="row-end-3 row-span-2">
                        <Image
                            width={400}
                            alt="NextUI hero Image"
                            src="https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default Agrotourism;