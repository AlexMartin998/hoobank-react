import { styles, clients } from '../../../../../shared';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({ id, logo }) => (
        <div
          key={id}
          className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
        >
          <img
            src={logo}
            alt="client_logo"
            className="w-[100px] sm:w-[192px] mb-6 sm:mb-0 object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
