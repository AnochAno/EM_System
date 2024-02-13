package Ano.backendEms.controller;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.service.EmployeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


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

}
