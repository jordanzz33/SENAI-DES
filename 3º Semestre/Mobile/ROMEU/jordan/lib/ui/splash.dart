import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'home.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with TickerProviderStateMixin {
  late AnimationController _escalaControll;
  late AnimationController _opacidadeControll;
  String nome = '';

  double _scale = 0.0;
  double _opacity = 0.0;

  @override
  void initState() {
    super.initState();

    _escalaControll =
        AnimationController(vsync: this, duration: const Duration(seconds: 2))
          ..addListener(() {
            setState(() {
              _scale = _escalaControll.value;
            });
          });

    _opacidadeControll =
        AnimationController(
          vsync: this,
          duration: const Duration(milliseconds: 800),
        )..addListener(() {
          setState(() {
            _opacity = _opacidadeControll.value;
          });
        });

    _escalaControll.forward();

    // Aguarda a animação terminar, depois faz o fade e navega
    Timer(const Duration(seconds: 2), () {
      _opacidadeControll.forward();
    });
  }

  Future<void> salvarNome() async {
    final localStorage = await SharedPreferences.getInstance();
    await localStorage.setString('nome', json.encode(nome));
    irParaHome();
  }

  void irParaHome() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => Home()),
    );
  }

  @override
  void dispose() {
    _escalaControll.dispose();
    _opacidadeControll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 20,
          children: [
            Opacity(
              opacity: _opacity,
              child: Transform.scale(
                scale: _scale,
                child: Image.asset('assets/logo.png', width: 300, height: 300),
              ),
            ),
            ElevatedButton(onPressed: salvarNome, child: Text("Entrar")),
            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextField(
                decoration: InputDecoration(labelText: "Digite seu nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
