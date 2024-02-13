package Ano.backendEms.mapper;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.entity.Employe;

public class EmployeMapper {

    public static EmployeDto mapToEmployeDto(Employe employe){
        return new EmployeDto(
                employe.getId(),
                employe.getFirstname(),
                employe.getLastname(),
                employe.getEmail(),
                employe.getPhone()
        );
    }

    public static Employe mapToEmploye(EmployeDto employeDto){
        return new Employe(
                employeDto.getId(),
                employeDto.getFirstname(),
                employeDto.getLastname(),
                employeDto.getEmail(),
                employeDto.getPhone()
        );
    }
}
