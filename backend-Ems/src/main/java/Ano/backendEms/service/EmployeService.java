package Ano.backendEms.service;

import Ano.backendEms.dto.EmployeDto;

import java.util.List;


public interface EmployeService {
    EmployeDto createEmploye(EmployeDto employeDto);

    EmployeDto getEmployebyid(Long emloyedId);

   List<EmployeDto> getallemloyes();

   EmployeDto updateembloy(Long employeId, EmployeDto updateEmployeDetalis);


}
