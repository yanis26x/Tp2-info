package reda.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import reda.backend.model.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
