import CartDetail from "../cart/CartDetail";
import CartPay from "../cart/CartPay";

function Cart() {
  return (
    <main className="wrapper mb-24">
      <h1 className="font-semibold text-[35px] sm:text-[50px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        My Cart
      </h1>
      <section className="flex flex-col md:flex-row gap-[5%] h-fit">
        <CartDetail />
        <CartPay />
      </section>
    </main>
  );
}

export default Cart;
