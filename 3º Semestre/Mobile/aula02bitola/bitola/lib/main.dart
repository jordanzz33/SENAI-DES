import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Simulador',
      home: App(),
    ),
  );
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  double corrente = 0;
  double distancia = 0;

  double bitola110 = 0;
  double bitola220 = 0;

  void calcular() {
    bitola110 = (2 * corrente * distancia) / 294.64;
    bitola220 = (2 * corrente * distancia) / 510.4;

    setState(() {});
  }

  void alert(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text("Resultado"),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text("127V: ${bitola110.toStringAsFixed(2)} mm²"),
              Text("220V: ${bitola220.toStringAsFixed(2)} mm²"),
            ],
          ),
          actions: [
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text("OK"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Calculadora de Bitola"),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(255, 127, 126, 129),
      ),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            Text(
              "Elétrica residencial (cobre)",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),

            SizedBox(height: 20),

            Card(
              elevation: 3,
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    TextField(
                      decoration: InputDecoration(
                        labelText: "Distância (m)",
                        border: OutlineInputBorder(),
                      ),
                      keyboardType: TextInputType.number,
                      onChanged: (v) {
                        distancia = double.tryParse(v) ?? 0;
                      },
                    ),

                    SizedBox(height: 15),

                    TextField(
                      decoration: InputDecoration(
                        labelText: "Corrente (A)",
                        border: OutlineInputBorder(),
                      ),
                      keyboardType: TextInputType.number,
                      onChanged: (v) {
                        corrente = double.tryParse(v) ?? 0;
                      },
                    ),

                    SizedBox(height: 20),

                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: () {
                          calcular();
                          alert(context);
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color.fromARGB(
                            255,
                            126,
                            125,
                            128,
                          ),
                          padding: EdgeInsets.symmetric(vertical: 15),
                        ),
                        child: Text(
                          "Calcular",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            SizedBox(height: 20),

            Card(
              elevation: 2,
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    Text(
                      "Resultado",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text("127V: ${bitola110.toStringAsFixed(2)} mm²"),
                    Text("220V: ${bitola220.toStringAsFixed(2)} mm²"),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
