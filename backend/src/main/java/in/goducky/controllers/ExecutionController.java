package in.goducky.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.goducky.dtos.ExecutionResponse;

@RestController
@RequestMapping("/api/execution")
public class ExecutionController {

    @PostMapping("/execute")
    public ResponseEntity<ExecutionResponse> execute() {
        return new ResponseEntity<>(new ExecutionResponse("Success","No Error"), HttpStatus.OK);
    }
}
