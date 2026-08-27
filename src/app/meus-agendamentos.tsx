import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  router,
  useFocusEffect,
} from "expo-router";

import {
  useCallback,
  useState,
} from "react";

import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function MeusAgendamentos() {
  const [
    agendamentos,
    setAgendamentos,
  ] = useState<any[]>([]);

  async function carregarAgendamentos() {
    try {
      const dados =
        await AsyncStorage.getItem(
          "agendamentos"
        );

      if (dados) {
        setAgendamentos(
          JSON.parse(dados)
        );
      } else {
        setAgendamentos([]);
      }
    } catch (erro) {
      console.log(erro);

      Alert.alert(
        "Erro",
        "Não foi possível carregar os agendamentos."
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      carregarAgendamentos();
    }, [])
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        styles.conteudo
      }
      showsVerticalScrollIndicator={
        false
      }
    >
      <Pressable
        onPress={() => router.back()}
      >
        <Text style={styles.voltar}>
          ← Voltar
        </Text>
      </Pressable>

      <Text style={styles.titulo}>
        Meus agendamentos
      </Text>

      <Text style={styles.subtitulo}>
        Consulte seus serviços agendados.
      </Text>

      {agendamentos.length === 0 ? (
        <View style={styles.cardVazio}>
          <Text style={styles.iconeVazio}>
            📅
          </Text>

          <Text style={styles.vazioTitulo}>
            Nenhum agendamento
          </Text>

          <Text style={styles.vazio}>
            Você ainda não realizou nenhum agendamento.
          </Text>
        </View>
      ) : (
        agendamentos.map((item) => (
          <View
            key={item.id}
            style={styles.card}
          >
            <View style={styles.cabecalhoCard}>
              <Text style={styles.servico}>
                {item.servico}
              </Text>

              <Text style={styles.status}>
                {item.status}
              </Text>
            </View>

            <Text style={styles.informacao}>
              👤 {item.profissional}
            </Text>

            <Text style={styles.informacao}>
              📅 {item.data}
            </Text>

            <Text style={styles.informacao}>
              🕐 {item.horario}
            </Text>

            <Text style={styles.preco}>
              {item.preco}
            </Text>
          </View>
        ))
      )}

      <Pressable
        style={styles.botao}
        onPress={() =>
          router.replace("/" as any)
        }
      >
        <Text style={styles.textoBotao}>
          Novo agendamento
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  conteudo: {
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  voltar: {
    fontSize: 16,
    color: "#3757D5",
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
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  cabecalhoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  servico: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222222",
    flex: 1,
  },

  informacao: {
    fontSize: 15,
    color: "#555555",
    marginTop: 7,
  },

  preco: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#3757D5",
    marginTop: 15,
  },

  status: {
    color: "#16883E",
    backgroundColor: "#E6F7EC",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },

  cardVazio: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  iconeVazio: {
    fontSize: 42,
    marginBottom: 10,
  },

  vazioTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },

  vazio: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginTop: 7,
  },

  botao: {
    backgroundColor: "#3757D5",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});