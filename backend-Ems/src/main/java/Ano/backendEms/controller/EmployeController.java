package Ano.backendEms.controller;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.service.EmployeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employes")
public class EmployeController {
    private EmployeService employeService;

    //create add Employe API

    @PostMapping
    public ResponseEntity<EmployeDto> createEmploye(@RequestBody EmployeDto employeDto){
     EmployeDto SaveEmploye =   employeService.createEmploye(employeDto);
     return new ResponseEntity<>(SaveEmploye, HttpStatus.CREATED);
    }


    //create get Employe API
    @GetMapping("{id}")
    public ResponseEntity<EmployeDto> GetEmployeId(@PathVariable("id") long employeId){
       EmployeDto employeDto = employeService.getEmployebyid(employeId);
       return ResponseEntity.ok(employeDto);
    }

    //Build Get All Employes Rest API
    @GetMapping
    public ResponseEntity<List<EmployeDto>> gettallemployes(){
        List<EmployeDto> employes = employeService.getallemloyes();
        return ResponseEntity.ok((employes));
    }

// Build update employe Rest API
@PutMapping("{id}")
    public ResponseEntity<EmployeDto> updateEmploye(@PathVariable("id") Long employeId, @RequestBody EmployeDto updatedEmployed){
       EmployeDto employeDto = employeService.updateembloy(employeId, updatedEmployed);
       return ResponseEntity.ok(employeDto);

    }

//Delete Empoye Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmploy(@PathVariable("id") Long employId){
        employeService.employeDeltete(employId);
        return ResponseEntity.ok("Employe Id: " + employId + " successfully Deleted!");
    }
}
