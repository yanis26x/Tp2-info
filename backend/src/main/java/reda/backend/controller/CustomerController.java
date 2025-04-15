package reda.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reda.backend.exception.CustomerNotFoundException;
import reda.backend.model.Customer;
import reda.backend.repositories.CustomerRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CustomerController {


    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/customers")
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer){
        customerRepository.save(customer);
        return customer;
    }


    @GetMapping("/customers/{id}")
    public Customer getCustomerById(@PathVariable Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException(id));
    }


    @PutMapping("/customers/{id}")
    Customer updateCustomer(@RequestBody Customer newOne, @PathVariable Long id) {
       return customerRepository.findById(id)
                .map(customer -> {
                    customer.setFname(newOne.getFname());
                    customer.setLname(newOne.getLname());
                    customer.setEmail(newOne.getEmail());
                    return customerRepository.save(customer);
                }).orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @DeleteMapping("/customers/{id}")
    String deleteCustomer(@PathVariable Long id){
        if(!customerRepository.existsById(id)){
            throw new CustomerNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return  "Customer with id "+id+" has been deleted success.";
    }
}
