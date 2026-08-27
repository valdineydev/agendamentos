import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Agendamento() {
  const {
    servicoNome,
    preco,
    profissionalNome,
  } = useLocalSearchParams();

  const data = "15/08/2026";
  const horario = "14:00";

  async function confirmarAgendamento() {
    try {
      const novoAgendamento = {
        id: Date.now(),

        servico: String(servicoNome),

        profissional: String(
          profissionalNome
        ),

        preco: String(preco),

        data: data,

        horario: horario,

        status: "Confirmado",
      };

      const dadosSalvos =
        await AsyncStorage.getItem(
          "agendamentos"
        );

      const agendamentos =
        dadosSalvos
          ? JSON.parse(dadosSalvos)
          : [];

      agendamentos.push(
        novoAgendamento
      );

      await AsyncStorage.setItem(
        "agendamentos",
        JSON.stringify(agendamentos)
      );

      Alert.alert(
        "Sucesso",
        "Agendamento realizado com sucesso!",
        [
          {
            text: "OK",
            onPress: () =>
              router.replace(
                "/meus-agendamentos" as any
              ),
          },
        ]
      );
    } catch (erro) {
      console.log(erro);

      Alert.alert(
        "Erro",
        "Não foi possível salvar o agendamento."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.back()}
      >
        <Text style={styles.voltar}>
          ← Voltar
        </Text>
      </Pressable>

      <Text style={styles.titulo}>
        Confirmar agendamento
      </Text>

      <Text style={styles.subtitulo}>
        Confira as informações antes de confirmar.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Serviço
        </Text>

        <Text style={styles.valor}>
          {String(servicoNome)}
        </Text>

        <View style={styles.linha} />

        <Text style={styles.label}>
          Profissional
        </Text>

        <Text style={styles.valor}>
          {String(profissionalNome)}
        </Text>

        <View style={styles.linha} />

        <Text style={styles.label}>
          Data
        </Text>

        <Text style={styles.valor}>
          📅 {data}
        </Text>

        <View style={styles.linha} />

        <Text style={styles.label}>
          Horário
        </Text>

        <Text style={styles.valor}>
          🕐 {horario}
        </Text>

        <View style={styles.linha} />

        <Text style={styles.label}>
          Valor
        </Text>

        <Text style={styles.preco}>
          {String(preco)}
        </Text>
      </View>

      <Pressable
        style={styles.botao}
        onPress={confirmarAgendamento}
      >
        <Text style={styles.textoBotao}>
          Confirmar agendamento
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  voltar: {
    color: "#3757D5",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 22,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
  },

  subtitulo: {
    fontSize: 15,
    color: "#777777",
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 18,
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  label: {
    color: "#777777",
    fontSize: 13,
    marginTop: 5,
  },

  valor: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222222",
    marginTop: 5,
  },

  linha: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 15,
  },

  preco: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#3757D5",
    marginTop: 5,
  },

  botao: {
    backgroundColor: "#3757D5",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 25,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});