import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceData = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to gym facilities",
            "Standard equipment usage",
            "Locker room access",
            "No personal trainer",
            "Access to group fitness classes",
            "Discounts at the gym store"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": "$49.99/month",
          "features": [
            "Access to gym facilities",
            "Access to premium equipment",
            "Locker room access",
            "No personal trainer",
            "Access to group fitness classes",
            "Discounts at the gym store",
            "Sauna and steam room access"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$79.99/month",
          "features": [
            "Access to gym facilities",
            "Access to premium equipment",
            "Locker room access",
            "1 personal training session per month",
            "Access to group fitness classes",
            "Discounts at the gym store",
            "Sauna and steam room access",
            "Nutrition consultation"
          ]
        },
        {
          "id": 4,
          "name": "Platinum Membership",
          "price": "$99.99/month",
          "features": [
            "Access to gym facilities",
            "Access to premium equipment",
            "Locker room access",
            "2 personal training sessions per month",
            "Access to group fitness classes",
            "Discounts at the gym store",
            "Sauna and steam room access",
            "Nutrition consultation",
            "Access to swimming pool"
          ]
        },
        {
          "id": 5,
          "name": "Diamond Membership",
          "price": "$149.99/month",
          "features": [
            "Access to gym facilities",
            "Access to premium equipment",
            "Locker room access",
            "3 personal training sessions per month",
            "Access to group fitness classes",
            "Discounts at the gym store",
            "Sauna and steam room access",
            "Nutrition consultation",
            "Access to swimming pool",
            "Exclusive access to VIP events"
          ]
        },
        {
          "id": 6,
          "name": "Elite Membership",
          "price": "$199.99/month",
          "features": [
            "Access to gym facilities",
            "Access to premium equipment",
            "Locker room access",
            "Unlimited personal training sessions",
            "Access to group fitness classes",
            "Discounts at the gym store",
            "Sauna and steam room access",
            "Nutrition consultation",
            "Access to swimming pool",
            "Exclusive access to VIP events",
            "Priority scheduling for classes"
          ]
        }
      ]

    return (
        <div>
            <h2 className="text-4xl text-center my-5">Best Prices in the town</h2>
            <div className="grid lg:grid-cols-3 my-6 text-center gap-5">
            {
                priceData.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;