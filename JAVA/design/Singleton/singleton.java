package com.company.design.singleton;

public class SocketClient {

	private static SocketClient socketClient = null;
// 	static 으로 error 해결
//	싱글톤은 자기 자신을 객체로 가지고 있어야 함.
	private SocketClient() {
//	기본생성자를 통해 생성할 수 없도록 기본생성자를 private으로 막아준다.

	}

	public static SocketClient getInstance() {
//		getInstance메소드를 제공.
//		밖에서 static 이기 때문에 getInstance 에 접근이 가능.

//	가진 객체가 null인지 아닌지 체크 
		if (socketClient == null) {
//		socketClient 가 null인 경우 생성
			socketClient = new SocketClient();
		}
//		아닌경우는 return
		return socketClient;
	}
	public void connect() {
		System.out.println("connect");
	}
}
