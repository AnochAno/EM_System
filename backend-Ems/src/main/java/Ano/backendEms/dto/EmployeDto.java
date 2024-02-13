package Ano.backendEms.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeDto {
    private Long Id;
    private String firstname;
    private String lastname;
    private  String email;
    private String phone;


}
