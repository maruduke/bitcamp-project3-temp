package com.example.backend.security;

import com.example.backend.dto.user.LoginDto;
import com.example.backend.entity.maria.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

/* 인증처리를 위한 객체
*   사용자 정보를 조회*/
@Service
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> result = userRepository.findByEmail(email);

        User user = result.orElseThrow(() -> new UsernameNotFoundException("해당 유저를 찾을 수 없습니다."));

        LoginDto loginDTO = new LoginDto(
                user.getEmail(),
                user.getPassword());


        return null;
    }
}
