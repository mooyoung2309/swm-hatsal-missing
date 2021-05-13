package swm.hatsal.missingserver.hello; 
 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;
 
@RestController
//@CrossOrigin(origins = "https://swm-hatsal-missing.run.goorm.io")
@CrossOrigin("*")
public class HelloController {
 
    @GetMapping("/hello")
    public String hello(){
        return "안녕하세요. 현재 서버시간은 "+new Date() +"입니다. \n";
    }
}
