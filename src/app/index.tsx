import { router } from "expo-router";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const servicos = [
  {
    id: 1,
    nome: "Corte de cabelo",
    descricao:
      "Corte masculino ou feminino com atendimento personalizado.",
    duracao: "40 minutos",
    preco: "R$ 45,00",
    icone: "✂️",
  },
  {
    id: 2,
    nome: "Barba",
    descricao:
      "Modelagem, acabamento e hidratação da barba.",
    duracao: "30 minutos",
    preco: "R$ 30,00",
    icone: "🧔",
  },
  {
    id: 3,
    nome: "Manicure",
    descricao:
      "Cuidados completos com as unhas das mãos.",
    duracao: "50 minutos",
    preco: "R$ 35,00",
    icone: "💅",
  },
  {
    id: 4,
    nome: "Limpeza de pele",
    descricao:
      "Procedimento para limpeza e hidratação facial.",
    duracao: "60 minutos",
    preco: "R$ 80,00",
    icone: "✨",
  },
];

export default function TelaInicial() {
  function abrirProfissionais(
    servicoId: number,
    servicoNome: string,
    preco: string
  ) {
    router.push({
      pathname: "/profissionais",
      params: {
        servicoId: String(servicoId),
        servicoNome: servicoNome,
        preco: preco,
      },
    } as any);
  }

  function abrirMeusAgendamentos() {
    router.push("/meus-agendamentos" as any);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.saudacao}>
          Olá! 👋
        </Text>

        <Text style={styles.titulo}>
          Qual serviço você deseja agendar?
        </Text>

        <Text style={styles.subtitulo}>
          Escolha uma das opções disponíveis.
        </Text>
      </View>

      <View style={styles.lista}>
        {servicos.map((servico) => (
          <View
            key={servico.id}
            style={styles.card}
          >
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>
                {servico.icone}
              </Text>
            </View>

            <View style={styles.informacoes}>
              <Text style={styles.nomeServico}>
                {servico.nome}
              </Text>

              <Text style={styles.descricao}>
                {servico.descricao}
              </Text>

              <View style={styles.detalhes}>
                <Text style={styles.duracao}>
                  ⏱ {servico.duracao}
                </Text>

                <Text style={styles.preco}>
                  {servico.preco}
                </Text>
              </View>

              <Pressable
                style={styles.botao}
                onPress={() =>
                  abrirProfissionais(
                    servico.id,
                    servico.nome,
                    servico.preco
                  )
                }
              >
                <Text style={styles.textoBotao}>
                  Selecionar serviço
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      <Pressable
        style={styles.botaoAgendamentos}
        onPress={abrirMeusAgendamentos}
      >
        <Text style={styles.textoBotao}>
          Meus agendamentos
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  cabecalho: {
    marginBottom: 24,
  },

  saudacao: {
    fontSize: 18,
    color: "#5F6368",
    marginBottom: 8,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1C1E",
    lineHeight: 36,
  },

  subtitulo: {
    fontSize: 16,
    color: "#72777A",
    marginTop: 8,
  },

  lista: {
    gap: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    gap: 14,
    elevation: 3,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  iconeContainer: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#E8EEFF",
    alignItems: "center",
    justifyContent: "center",
  },

  icone: {
    fontSize: 27,
  },

  informacoes: {
    flex: 1,
  },

  nomeServico: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222222",
  },

  descricao: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    marginTop: 5,
  },

  detalhes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  duracao: {
    fontSize: 13,
    color: "#6D6D72",
  },

  preco: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3757D5",
  },

  botao: {
    backgroundColor: "#3757D5",
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: "center",
    marginTop: 14,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  botaoAgendamentos: {
    backgroundColor: "#222222",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },
});