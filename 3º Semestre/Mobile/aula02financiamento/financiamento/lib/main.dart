import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(debugShowCheckedModeBanner: false, home: App()));
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  double investimento = 0;
  int meses = 0;
  double juros = 0;

  double totalSemJuros = 0;
  double totalComJuros = 0;

  void calcular() {
    double taxa = juros / 100;

    totalSemJuros = investimento * meses;
    totalComJuros = 0;

    for (int i = 0; i < meses; i++) {
      totalComJuros = (totalComJuros + investimento) * (1 + taxa);
    }

    setState(() {});
  }

  Widget campo(String label, Function(String) onChanged) {
    return TextField(
      keyboardType: TextInputType.number,
      decoration: InputDecoration(
        labelText: label,
        border: OutlineInputBorder(),
      ),
      onChanged: onChanged,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Simulador de Investimentos"),
        centerTitle: true,
      ),

      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          children: [
            campo("Investimento mensal", (v) {
              investimento = double.tryParse(v) ?? 0;
            }),
            SizedBox(height: 10),

            campo("Meses", (v) {
              meses = int.tryParse(v) ?? 0;
            }),
            SizedBox(height: 10),

            campo("Juros (%)", (v) {
              juros = double.tryParse(v) ?? 0;
            }),
            SizedBox(height: 20),

            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: calcular,
                child: Text("Simular"),
              ),
            ),

            SizedBox(height: 20),

            Text("Sem juros: R\$ ${totalSemJuros.toStringAsFixed(2)}"),
            Text("Com juros: R\$ ${totalComJuros.toStringAsFixed(2)}"),
          ],
        ),
      ),
    );
  }
}
